import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'profile',
  initialState: {
  },
  reducers: {
  },
  extraReducers: {
  },
});

export const { } = slice.actions;

export const selectProfileState = (state) => state.profile;

export default slice.reducer;
