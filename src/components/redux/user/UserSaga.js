import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./UserType";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../../firebase/FirebaseUtils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess, 
  signOutFailure
  // , emailSignInFailure, emailSignInSuccess
} from "./UserAction";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signWithGoogle() {
  try {
    const { user } = yield auth.signWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassward(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signWithGoogle);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart)
  ]);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
