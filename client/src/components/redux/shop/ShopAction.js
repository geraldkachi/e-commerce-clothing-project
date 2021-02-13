import { covertCollectionsSnapshotToMap, firestore } from "../../../firebase/FirebaseUtils";
import ShopActionTypes from "./ShopType";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef
        .get()
        .then(snapshot => {
            const collectionsMap = covertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
            // updateCollections(collectionsMap);
          }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}














// export const updateCollections = ( collectionsMap ) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap  
// })

// thunk is an action creator that returns a function that gets the dispatch