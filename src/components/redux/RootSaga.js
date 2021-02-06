import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/ShopAction";
import { userSaga } from "./user/UserSaga";


export default function* RootSaga() {
  yield all([call(fetchCollectionsStart), call(userSaga)]);
}
