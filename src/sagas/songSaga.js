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

function* fetchSongs() {
  try {
    const response = yield call(fetch, 'http://localhost:3500/songs');
    const data = yield response.json();
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* editSong(action) {
  try {
    const response = yield call(fetch, `http://localhost:3500/songs/${action.payload.id}`, {
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
    const response = yield call(fetch, 'http://localhost:3500/songs', {
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
    yield call(fetch, `http://localhost:3500/songs/${action.payload}`, {
      method: 'DELETE',
    });
    yield put(deleteSongSuccess(action.payload));
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
