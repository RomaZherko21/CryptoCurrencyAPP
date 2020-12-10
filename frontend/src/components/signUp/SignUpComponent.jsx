import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'signUp',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    }
  },
  reducers: {
    onFirstNameTyping: (state, action) => {

      !/^[a-z]{2,16}$/gi.test(action.payload)
        ? (state.errors.firstName = true)
        : (state.errors.firstName = false);

      state.firstName = action.payload;
    },
    onLastNameTyping: (state, action) => {

      !/^[a-z]{2,16}$/gi.test(action.payload)
        ? (state.errors.lastName = true)
        : (state.errors.lastName = false);

      state.lastName = action.payload;
    },
    onEmailTyping: (state, action) => {

      !/^[A-Z0-9a-z_]{3,}@[a-z]{2,6}\.[a-z]{2,4}$/g.test(action.payload)
      ? (state.errors.email = true)
      : (state.errors.email = false);

      state.email = action.payload;
    },
    onPasswordTyping: (state, action) => {

      !/^[a-z0-9.!&/#%*?()]{4,}$/gi.test(action.payload)
      ? (state.errors.password = true)
      : (state.errors.password = false);

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
