import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storages/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit cabin
  let query = supabase.from('cabins');

  // A) Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) Edit
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // 2. Upload the image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imagePath, newCabin.image);

  // 3. Delete the cabin if there was an error uploading the image
  if (storageError) {
    console.error(storageError);
    await deleteCabin(data.id);
    throw new Error('Image could not be uploaded');
  }

  return data;
}
