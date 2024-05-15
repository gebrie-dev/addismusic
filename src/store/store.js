// In store/store.js
import { configureStore } from '@reduxjs/toolkit';
import librarySlice from './librarySlice';
import songSlice from './songSlice';



const store = configureStore({
  reducer: {
    library: librarySlice,
    songs: songSlice,
  },
});

export default store;
