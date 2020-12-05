import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'signIn',
  initialState: {
    email: '',
    password: ''
  },
  reducers: {
    onEmailTyping: (state, action) => {
      state.email = action.payload;
    },
    onPasswordTyping: (state, action) => {
      state.password = action.payload;
    },
    onSubmit: state => {
      console.log('Send on server', { email: state.email, password: state.password })
      state.email = '';
      state.password = '';
    }
  },
});

export const { onEmailTyping, onPasswordTyping, onSubmit } = slice.actions;

export const selectSignInState = (state) => state.signIn;

export default slice.reducer;
