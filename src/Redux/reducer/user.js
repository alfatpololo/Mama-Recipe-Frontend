const userState = {
    user: {
}, isLoading: false}

const userReducer = (state=userState, action) => {
    switch (action.type) {
        case "REGISTER_PENDING":
           return {
            ...state, isLoading: true
           }
    
           case "REGISTER_SUCCESS":
            return {
             ...state, isLoading: false
            }

            case "REGISTER_FAILED":
                return {
                 ...state, isLoading: false
                }
        case "LOGIN_PENDING":
           return {
            ...state, isLoading: true
           }
    
           case "LOGIN_SUCCESS":
            return {
             ...state, isLoading: false, user: action.payload
            }

            case "LOGIN_FAILED":
                return {
                 ...state, isLoading: false
                }

        default:
           return state
    }
}

export default userReducer;