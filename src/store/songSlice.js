import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editSongStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editSongSuccess: (state, action) => {
      const updatedData = state.data.map(song =>
        song.id === action.payload.id ? action.payload : song
      );
      state.data = updatedData;
      state.loading = false;
    },
    editSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSongStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess: (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    },
    addSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action) => {
      state.data = state.data.filter(song => song.id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  editSongStart,
  editSongSuccess,
  editSongFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
