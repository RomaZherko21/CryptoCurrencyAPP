import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import signInAPI from '../../api/signIn'

export const onSubmit = createAsyncThunk('signIn/onSubmit', async (state) => {
  let response = await signInAPI.signIn({ email: state.email, password: state.password })
  return response.data;
})

export const slice = createSlice({
  name: 'signIn',
  initialState: {
    email: '',
    password: '',
    currentUser:{
      firstName:'',
      lastName: '',
      email: ''
    },
    isSignedIn: false,
    errMessage:'',
  },
  reducers: {
    onEmailTyping: (state, action) => {
      state.email = action.payload;
    },
    onPasswordTyping: (state, action) => {
      state.password = action.payload;
    }
  },
  extraReducers: {
    [onSubmit.fulfilled]: (state, action) => {
      if(action.payload.error){
        state.errMessage = action.payload.message;
      }else{
        state.currentUser = {
          ...action.payload.user
        }
        state.errMessage = '';
        state.isSignedIn = true;
        state.email = '';
        state.password = '';
      }
    },
  },
});

export const { onEmailTyping, onPasswordTyping } = slice.actions;

export const selectSignInState = (state) => state.signIn;

export default slice.reducer;
