import { 
  // takeEvery, 
  takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./ShopType";

import {firestore, covertCollectionsSnapshotToMap } from "../../../firebase/FirebaseUtils"
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "../../redux//shop/ShopAction"
 

export function* fetchCollectionsAsync() {

    try {    
      const collectionRef = firestore.collection('collections')
      const snapshot = yield collectionRef.get()
      const collectionMap = yield call(covertCollectionsSnapshotToMap, snapshot)
     yield put(fetchCollectionsSuccess(collectionMap))
    } catch (error) {
      yield put(fetchCollectionsFailure(error.message)) 
    }

    // => this  is without Saga
    // collectionRef
    // .get()
    // .then(snapshot => {
    //     const collectionsMap = covertCollectionsSnapshotToMap(snapshot)
    //     dispatch(fetchCollectionsSuccess(collectionsMap))
    //     // updateCollections(collectionsMap);
    //   }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
  }

export function* fetcCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}