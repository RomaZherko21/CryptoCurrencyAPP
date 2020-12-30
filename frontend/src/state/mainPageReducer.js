import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../api/config";

export const getCurrency = createAsyncThunk(
  "mainPage/getCurrency",
  async () => {
    const response = await axios.get(`${config.CRYPTOCURRENCY_API}`);
    return response.data.data;
  }
);

export const slice = createSlice({
  name: "mainPage",
  initialState: {
    currentCurrencyArr: [],
    allCurrenciesArr: [],
  },
  reducers: {
    onFilterSubmit: (state, action) => {
      let arr = [];

      const regexp = new RegExp(action.payload.name, "i");
      for (const item of state.allCurrenciesArr) {
        if (
          item.priceUsd <= action.payload.price &&
          (action.payload.name === "" || regexp.test(item.name))
        ) {
          arr.push(item);
        }
      }

      if (action.payload.priceSort) arr.sort((a, b) => b.priceUsd - a.priceUsd);
      state.currentCurrencyArr = [...arr];
    },
  },
  extraReducers: {
    [getCurrency.fulfilled]: (state, action) => {
      console.log("GET currency");
      state.currentCurrencyArr = [...action.payload];
      state.allCurrenciesArr = [...action.payload];
    },
  },
});

export const { onFilterSubmit } = slice.actions;

export const selectCurrentCurrencyArr = (state) =>
  state.mainPage.currentCurrencyArr;

export default slice.reducer;
