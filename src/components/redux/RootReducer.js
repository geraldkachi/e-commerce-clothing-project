import {combineReducers} from "redux"

import UserReducer from "./user/UserReducer"

export default combineReducers({
    user: UserReducer
})
