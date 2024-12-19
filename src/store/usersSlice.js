import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/usersApi';

export const fetchUsersThunk = createAsyncThunk(
  'users/fetchUsers',
  async (amount) => {
    const response = await fetchUsers(amount);
    return response;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users.data;
export const selectUsersLoading = (state) => state.users.isLoading;
export const selectUsersError = (state) => state.users.error;

export default usersSlice.reducer;
