import { combineReducers } from "redux"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import UserReducer from "./user/UserReducer"
import CartReducer from "./cart/CartReducer"

const presistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer
})

export default persistReducer(presistConfig, rootReducer)


// export default combineReducers({
//     user: UserReducer,
//     cart: CartReducer
// })
