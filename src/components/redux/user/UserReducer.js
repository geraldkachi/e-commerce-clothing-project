import { UserActionTypes } from "./UserType"

const initState = {
    currentUser: null
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default UserReducer