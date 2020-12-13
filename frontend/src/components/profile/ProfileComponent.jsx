import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersListAPI from '../../api/usersList';


export const onPageChange = createAsyncThunk('profile/onPageChange', async (page) => {
  let response = await usersListAPI.getUsers(page);
  return {users:response.data.users, page};
})

export const slice = createSlice({
  name: 'profile',
  initialState: {
    currentPage: 1,
    currentUsersList: [],
  },
  reducers: {
  },
  extraReducers: {
    [onPageChange.fulfilled]: (state, action) => {
      state.currentUsersList = [...action.payload.users];
      state.currentPage = action.payload.page;
    },
  },
});

// export const { } = slice.actions;

export const selectProfileState = (state) => state.profile;

export default slice.reducer;
