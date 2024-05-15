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
    addSong, // New action creator for adding a song
    editSong, // New action creator for editing a song
} = songSlice.actions;

export default songSlice.reducer;

export function getSongs() {
    return async function getSongsThunk(dispatch) {
        dispatch(fetchSongsStart());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums'); // Updated API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch songs');
            }
            const data = await response.json();
            dispatch(fetchSongsSuccess(data));
        } catch (error) {
            console.error('Error fetching songs:', error);
            dispatch(fetchSongsFailure(error.message));
        }
    };
}
