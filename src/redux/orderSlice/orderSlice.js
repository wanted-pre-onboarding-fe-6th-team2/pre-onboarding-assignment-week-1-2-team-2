import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initalState';

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
