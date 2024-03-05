import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.type";
import { collection, getDocs } from "firebase/firestore";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollections() {
  try {
    const snapshot = yield getDocs(collection(firestore, "collections"));
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

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
