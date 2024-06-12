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

function* handleApiCall(apiCall, successAction, failureAction, ...args) {
  try {
    const response = yield call(apiCall, ...args);
    const data = yield response.json();
    yield put(successAction(data));
  } catch (error) {
    yield put(failureAction(error.message));
  }
}

function fetchSongsApi() {
  return fetch(`${API_BASE_URL}/songs`);
}

function editSongApi(id, payload) {
  return fetch(`${API_BASE_URL}/songs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

function addSongApi(payload) {
  return fetch(`${API_BASE_URL}/songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

function deleteSongApi(id) {
  return fetch(`${API_BASE_URL}/songs/${id}`, {
    method: 'DELETE',
  });
}

function* fetchSongs(action) {
  yield call(handleApiCall, fetchSongsApi, fetchSongsSuccess, fetchSongsFailure);
}

function* editSong(action) {
  yield call(handleApiCall, editSongApi, editSongSuccess, editSongFailure, action.payload.id, action.payload);
}

function* addSong(action) {
  yield call(handleApiCall, addSongApi, addSongSuccess, addSongFailure, action.payload);
}

function* deleteSong(action) {
  yield call(handleApiCall, deleteSongApi, deleteSongSuccess, deleteSongFailure, action.payload);
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
