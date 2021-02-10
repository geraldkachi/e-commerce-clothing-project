import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/UserType";
import { clearCart } from "./CartAction";
// import CartActionTypes from "./CartType";

export function* clearCartOnSIgnOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSIgnOut)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}