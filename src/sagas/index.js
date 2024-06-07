import { all } from 'redux-saga/effects';
import { watchFetchSongs, watchEditSong, watchAddSong } from './songSaga';

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchEditSong(),
    watchAddSong(),
  ]);
}
