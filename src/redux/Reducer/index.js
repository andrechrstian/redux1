import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";




const rootReducer = combineReducers ({
    counter: counterReducer,
    auth: authReducer
})

export default rootReducer