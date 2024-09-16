# 🏨 The Wild Oasis - Hotel Management System

This project is an internal application built for **The Wild Oasis**, a small boutique hotel featuring eight luxurious wooden cabins. The app is designed to help hotel staff manage all hotel operations, including bookings, cabins, guests, and check-ins/check-outs. It is also the back-office management tool for the hotel, eventually working alongside a future customer-facing website for bookings.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Pages](#pages)
- [Project Setup](#project-setup)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

### Authentication

- User login and signup.
- User account management by hotel staff.

### Cabins Management

- View and manage (edit/delete) cabins.
- Add new cabins.

### Bookings Management

- View current, past, and future bookings.
- Add and manage bookings.

### Check-In and Check-Out

- Hotel staff can check guests in and out using the booking ID.

### Guest Management

- Display guest details.
- Manage guest stays and details during their visit.

### Dashboard

- View various statistics and charts related to hotel operations.
- Data visualization with charts for booking trends, guest information, and revenue statistics.

### Settings

- Hotel staff can update settings, user profiles, and preferences.

## Technology Stack

This application is built using modern web technologies and popular libraries to create a seamless user experience for the hotel staff.

### Frontend

- **React**: Core framework for building user interfaces.
- **React Router**: For handling routing and navigation.
- **Styled Components**: Styling solution, writing CSS directly within JavaScript components.
- **React Query**: For managing remote state and interacting with the API.
- **Context API**: For handling local UI state management.
- **React Hook Form**: For building and managing forms, handling form state and validation.
- **React Icons**: For a wide range of icons to use in the UI.
- **React Hot Toast**: For notifications and user alerts.
- **Recharts**: For creating charts and data visualizations on the dashboard.
- **date-fns**: A lightweight date utility library for date manipulation.

### Backend

- **Supabase**: Used for building the backend API and managing remote data.

## Pages

The application is divided into the following key pages for hotel management:

1. **Dashboard**: Home page displaying key hotel stats and visualized data.
2. **Bookings Page**: Displays all bookings (current, past, future) and allows management of bookings.
3. **Cabins Page**: Allows hotel staff to view, edit, and delete cabins.
4. **Check-In/Check-Out Page**: Used for managing guest check-ins and check-outs.
5. **Settings Page**: Allows staff to update hotel settings.
6. **Login Page**: Default page if the user is not logged in. Handles user authentication.
7. **User Page**: For managing and registering new users.

## Project Setup

To get started with this project, follow the steps below:

### Prerequisites

- Node.js and npm/yarn installed.
- Supabase account for backend setup.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KarimAdel-1/The-Wild-Oasis.git
   cd The-Wild-Oasis
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following Supabase credentials:

   ```
   VITE_SUPABASE_URL='your-supabase-url'
   VITE_SUPABASE_KEY='your-supabase-key'
   ```

4. Start the development server:
   ```bash
   npm start
   ```
