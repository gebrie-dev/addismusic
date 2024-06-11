import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
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
} from '../store/songSlice';

const API_BASE_URL = 'https://songs-8gda.onrender.com'; // Update with your deployed API URL

function* fetchSongs() {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/songs`);
    const data = yield response.json();
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* editSong(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/songs/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(editSongSuccess(data));
  } catch (error) {
    yield put(editSongFailure(error.message));
  }
}

function* addSong(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/songs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(addSongSuccess(data));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/songs/${action.payload}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      yield put(deleteSongSuccess(action.payload));
    } else {
      const errorData = yield response.json();
      yield put(deleteSongFailure(errorData.message || 'Failed to delete the song'));
    }
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* watchFetchSongs() {
  yield takeLatest(fetchSongsStart.type, fetchSongs);
}

export function* watchEditSong() {
  yield takeLatest(editSongStart.type, editSong);
}

export function* watchAddSong() {
  yield takeLatest(addSongStart.type, addSong);
}

export function* watchDeleteSong() {
  yield takeLatest(deleteSongStart.type, deleteSong);
}

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchEditSong(),
    watchAddSong(),
    watchDeleteSong(),
  ]);
}
