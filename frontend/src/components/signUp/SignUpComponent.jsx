import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'signUp',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  reducers: {
    onFirstNameTyping: (state, action) => {
      state.firstName = action.payload;
    },
    onLastNameTyping: (state, action) => {
      state.lastName = action.payload;
    },
    onEmailTyping: (state, action) => {
      state.email = action.payload;
    },
    onPasswordTyping: (state, action) => {
      state.password = action.payload;
    },
    onSubmit: state => {
      console.log('Send on server fuck', { firstName: state.firstName, lastName: state.lastName, email: state.email, password: state.password });
      state.firstName = '';
      state.lastName = '';
      state.password = '';
      state.email = '';
    }
  },
});

export const { onFirstNameTyping, onLastNameTyping, onEmailTyping, onPasswordTyping, onSubmit } = slice.actions;

export const selectSignUpState = (state) => state.signUp;

export default slice.reducer;
