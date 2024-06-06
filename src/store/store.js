import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import librarySlice from './librarySlice';
import songSlice from './songSlice';
import rootSaga from '../sagas'; // Correct import path for rootSaga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with the saga middleware
const store = configureStore({
  reducer: {
    library: librarySlice,
    songs: songSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
