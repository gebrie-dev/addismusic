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
        fetchSongsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchSongsSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchSongsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addSong(state, action) {
            state.data.push(action.payload);
        },
        editSong(state, action) {
            const { id, updatedSong } = action.payload;
            const songIndex = state.data.findIndex(song => song.id === id);
            if (songIndex !== -1) {
                state.data[songIndex] = updatedSong;
            }
        },
    },
});

export const { 
    fetchSongsStart, 
    fetchSongsSuccess, 
    fetchSongsFailure, 
    addSong, 
    editSong 
} = songSlice.actions;

export default songSlice.reducer;
