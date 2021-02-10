import { takeEvery } from 'redux-saga/effects'

export function* onIncrement() {
    yield console.log('I am incemented');
}

export function* incrementSaga() {
    yield takeEvery('INCREMENt', onIncrement)
    // yield incremenPayload = take('INCREMENt')
    console.log(' i am incremented'); 
}
