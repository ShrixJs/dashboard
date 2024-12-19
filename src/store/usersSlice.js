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
  results: [],
  contacts: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.contacts.push({ name: action.payload, avatar: 'default', registered: Date.now() });
    },
    deleteUser: (state, action) => {
      state.results = state.results.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
        state.contacts = action.payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users.results;
export const selectContacts = (state) => state.users.contacts;
export const selectUsersLoading = (state) => state.users.isLoading;
export const selectUsersError = (state) => state.users.error;

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
