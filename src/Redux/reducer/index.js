import {combineReducers} from "redux";
import userReducer from "./user";
import insertReducer from "./recipe"

const rootReducer = combineReducers({
    user: userReducer,
    recipe: insertReducer,
})

export default rootReducer;