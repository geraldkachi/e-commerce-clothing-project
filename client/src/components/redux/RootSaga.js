import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/CartSagas";
import { fetchCollectionsStart } from "./shop/ShopAction";
import { userSagas } from "./user/UserSaga";

export default function* RootSaga() {
  yield all([
    call(fetchCollectionsStart), 
    call(userSagas), 
    call(cartSagas)]);
}
