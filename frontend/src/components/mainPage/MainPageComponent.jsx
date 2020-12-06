import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCurrency = createAsyncThunk('mainPage/getCurrency', async () => {
  let response = await axios.get('https://api.coincap.io/v2/assets');
  return response.data.data;
})


export const slice = createSlice({
  name: 'mainPage',
  initialState: {
    currentCurrencyArr: []
  },
  reducers: {
  },
  extraReducers: {
    [getCurrency.fulfilled]: (state, action) => {
      console.log('GET currency')
      state.currentCurrencyArr = [...action.payload];
    },
  },
});


export const { onEmailTyping, onPasswordTyping, onSubmit } = slice.actions;

export const selectMainPageState = (state) => state.mainPage;

export default slice.reducer;

