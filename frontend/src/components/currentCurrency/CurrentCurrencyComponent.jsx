import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCurrencyInfo = createAsyncThunk('currentCurrency/getCurrencyInfo', async () => {
  let response = await axios.get(`https://api.coincap.io/v2/assets/${window.location.pathname.split('/')[2]}`);
  return response.data.data;
})


export const getCurrencyHistory = createAsyncThunk('currentCurrency/getCurrencyHistory', async () => {
  let response = await axios.get(`https://api.coincap.io/v2/assets/${window.location.pathname.split('/')[2].toLocaleLowerCase()}/history?interval=d1`);
  response = response.data.data.reverse();

  let history = [];
  for (let i = 0; i < 10; i++) {
    let date = response[i].date.split('T')[0];
    let price = Number(response[i].priceUsd).toFixed(3)
    history.push({
      price,
      date
    })
  }

  return history;
})



export const slice = createSlice({
  name: 'currentCurrency',
  initialState: {
    info: {},
    history: [],
  },
  reducers: {
  },
  extraReducers: {
    [getCurrencyInfo.fulfilled]: (state, action) => {
      console.log('GET currency INFO')
      state.info = { ...action.payload };
    },
    [getCurrencyHistory.fulfilled]: (state, action) => {
      console.log('GET currency HISTORY')
      state.history = [...action.payload];
    },
   
  },
});


// export const { } = slice.actions;

export const selectCurrentCurrency = (state) => state.currentCurrency;

export default slice.reducer;

