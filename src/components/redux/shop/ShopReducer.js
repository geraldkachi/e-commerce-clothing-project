import ShopData from "../../pagesapp/shoppage/ShopData"
import ShopActionTypes from "./ShopType";

const initState = {
    collections: ShopData,
    isFetching: false,
    errorMessage: undefined
}
// const initState = {
//     collections: null
//     isFetching:false
// }

const ShopReducer = (state= initState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START: 
        return {
            ...state,
            isFetching:false
        }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS: 
        return {
            ...state,
            isFetching:false,
            collections: action.payload
        }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE: 
        return {
            ...state,
            isFetching:false,
            errorMessage: action.payload,

        }
        // case ShopActionTypes.UPDATE_COLLECTIONS: 
        // return {
        //     ...state,
        //     collections: action.payload
        // }
        default:
            return state;
    }
}

export default ShopReducer