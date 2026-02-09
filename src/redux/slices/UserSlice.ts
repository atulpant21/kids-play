import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from "../../models/User";
// If fetchUsers is a default export:
import { fetchItems } from '../../services/ApiServices';

// Make sure fetchItems is defined as createAsyncThunk<User[], void, { rejectValue: string }>


// Or, if fetchUsers is not exported at all, add the following to '../../services/ApiServices.ts':
// export const fetchUsers = async () => { /* implementation */ };

const initialState: UserState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null as string | null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch posts';
      });
  },
});

export default userSlice.reducer;