import { takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.type';

import {firestore, convertCollectionsSnapshotToMap} from '../../fireabase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';


export function* fetchCollections() {
    try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap = yield call(
        convertCollectionsSnapshotToMap,
        snapshot
      );
      yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
    }
  }

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas(){
  yield all([call(fetchCollectionsStart)]);
}

