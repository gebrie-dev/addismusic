// src/sagas/rootSaga.js

import { all } from 'redux-saga/effects';
import { watchFetchSongs, watchEditSong, watchAddSong, watchDeleteSong } from './songSaga'; // Adjust the path if necessary

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchEditSong(),
    watchAddSong(),
    watchDeleteSong(),
  ]);
}
