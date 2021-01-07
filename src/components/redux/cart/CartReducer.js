import CartActionTypes from "./CartType"
import {addItemsToCart} from "./CartUtils"

const initState = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: addItemsToCart(state.cartItems, action.payload)
                // cartItems: [...state.cartItems, action.payload]
            }
    
        default:
            return state
    }
}

export default CartReducer