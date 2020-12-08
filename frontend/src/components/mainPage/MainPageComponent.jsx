import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrency = createAsyncThunk('mainPage/getCurrency', async () => {
  let response = await axios.get('https://api.coincap.io/v2/assets');
  return response.data.data;
})

export const slice = createSlice({
  name: 'mainPage',
  initialState: {
    currentCurrencyArr: [],
    allCurrenciesArr:[],
  },
  reducers: {
    onFilterSubmit: (state, action) => {
      let arr = [];
      let regexp = new RegExp(action.payload.name, 'i');
      for (let item of state.allCurrenciesArr) {
        if ((item.priceUsd <= action.payload.price && action.payload.name === "") || (item.priceUsd <= action.payload.price && regexp.test(item.name))) {
          arr.push(item);
        }
      }
      state.currentCurrencyArr = [...arr];
    }
  },
  extraReducers: {
    [getCurrency.fulfilled]: (state, action) => {
      console.log('GET currency')
      state.currentCurrencyArr = [...action.payload];
      state.allCurrenciesArr = [...action.payload];
    },
  },
});


export const { onFilterSubmit } = slice.actions;

export const selectCurrentCurrencyArr = (state) => state.mainPage.currentCurrencyArr;

export default slice.reducer;

