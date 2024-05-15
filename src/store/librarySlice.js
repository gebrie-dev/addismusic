import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    add(state, action) {
      const item = action.payload;
      const existingItem = state.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    remove(state, action) {
      const idToRemove = action.payload;
      return state.filter(item => item.id !== idToRemove);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

export const { add, remove, updateQuantity } = librarySlice.actions;
export default librarySlice.reducer;
