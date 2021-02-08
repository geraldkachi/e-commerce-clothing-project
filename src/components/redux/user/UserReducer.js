import  UserActionTypes  from "./UserType"

const initState = {
    currentUser: null,
    error: null
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCUSS:
        // case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS: 
        return {
            ...state,
            currentUser: null,
            error: null
        }
        case UserActionTypes.SIGN_IN_FAILURE: 
        case UserActionTypes.SIGN_OUT_FAILURE: 
        case UserActionTypes.SIGN_UP_FAILURE: 
        return {
            ...state,
            error: action.payload
        }
        default:
            return state
    }
}

export default UserReducer