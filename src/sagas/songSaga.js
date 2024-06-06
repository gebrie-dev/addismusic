import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongsStart, fetchSongsSuccess, fetchSongsFailure } from '../store/songSlice'; // Adjust the import path here


function* fetchSongs() {
  try {
    const response = yield call(fetch, 'http://localhost:3500/songs');
    const data = yield response.json();
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// Watcher saga
export function* watchFetchSongs() {
  yield takeLatest(fetchSongsStart.type, fetchSongs);
}
