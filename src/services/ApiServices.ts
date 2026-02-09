import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserState } from '../models/User';

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async (): Promise<any> => {

//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// }
// );

export const fetchItems = createAsyncThunk<User[], void, { rejectValue: string }>(
  'items/fetchItems',
  async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
  }
);