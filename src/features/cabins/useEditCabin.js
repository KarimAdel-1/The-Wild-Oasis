import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';
import { useQueryClient } from '@tanstack/react-query';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = {
    mutateFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries('cabins');
    },
    onError: () => {
      toast.error('Failed to edit cabin');
    },
  };

  return { editCabin, isEditing };
}
