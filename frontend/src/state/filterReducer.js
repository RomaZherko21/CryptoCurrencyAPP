import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filterParams:{
      name:'',
      price:20000,
    }
  },
  reducers: {
    onNameFilter: (state, action) => {
      state.filterParams.name = action.payload;
    },
    onPriceFilter: (state, action) => {
      state.filterParams.price = action.payload;
    }
  },
});

export const { onNameFilter, onPriceFilter } = slice.actions;

export const selectFilterParams = (state) => state.filter.filterParams;

export default slice.reducer;

