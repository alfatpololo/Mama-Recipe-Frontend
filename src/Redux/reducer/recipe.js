const insertState = {
    recipe: {
    }, isLoading: false}

const insertReducer = (state=insertState, action) => {
    switch (action.type) {
        case "ADD_RECIPE_PENDING":
            return {
                ...state, isLoading: true
            }

            case "ADD_RECIPE_SUCCESS":
                return {
                    ...state, isLoading: false
                }

                    case "ADD_RECIPE_FAILED":
                        return {
                            ...state, isLoading: false  
                        }
    
        default:
            return state
    }
}