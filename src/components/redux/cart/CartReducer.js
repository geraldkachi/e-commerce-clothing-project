import CartActionTypes from "./CartType"

const initState = {
    hidden: true
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
    
        default:
            return state
    }
}

export default CartReducer