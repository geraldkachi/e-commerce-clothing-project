import { combineReducers } from "redux"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import UserReducer from "./user/UserReducer"
import CartReducer from "./cart/CartReducer"
import DirectoryReducer from "./directory/DirectoryReducer"
import ShopReducer from "./shop/ShopReducer"
import AppReducer from "../signIn/AppReducer"


const presistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer,
    count: AppReducer
})

export default persistReducer(presistConfig, rootReducer)


// export default combineReducers({
//     user: UserReducer,
//     cart: CartReducer
// })
