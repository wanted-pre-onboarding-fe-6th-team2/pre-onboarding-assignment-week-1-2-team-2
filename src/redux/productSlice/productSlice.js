import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/productSlice/initalState';

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      return [...state, payload];
    },
    delete: (state, { payload }) => {
      const deleteId = payload;
      const newState = state;
      const deleteIndex = newState.findIndex(product => product.id === deleteId);

      newState.splice(deleteIndex, deleteIndex + 1);
      return newState;
    },
    config: (state, { payload }) => {
      const configId = payload.id;
      const newState = state;
      const configIndex = newState.findIndex(product => product.id === configId);

      newState[configIndex] = payload;
      return newState;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
