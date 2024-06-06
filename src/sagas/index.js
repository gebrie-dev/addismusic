import { all } from 'redux-saga/effects';
import { watchFetchSongs } from './songSaga';
import { watchLibraryActions } from './librarySaga'; // Add this line

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchLibraryActions(), // Add this line
  ]);
}

