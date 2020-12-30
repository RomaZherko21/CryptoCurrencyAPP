import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "filter",
  initialState: {
    filterParams: {
      name: "",
      price: 30000,
      priceSort: false,
    },
  },
  reducers: {
    onNameFilter: (state, action) => {
      state.filterParams.name = action.payload;
    },
    onPriceFilter: (state, action) => {
      state.filterParams.price = action.payload;
    },
    onPriceSortFilter: (state) => {
      state.filterParams.priceSort = !state.filterParams.priceSort;
    },
  },
});

export const { onNameFilter, onPriceFilter, onPriceSortFilter } = slice.actions;

export const selectFilterParams = (state) => state.filter.filterParams;

export default slice.reducer;
