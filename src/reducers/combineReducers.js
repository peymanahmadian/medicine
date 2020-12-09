//import lib
import {combineReducers} from "redux";
//import reducer
import AccountReducer from "./accountReducer";
import VisualReducer from "./visualReducer";
export default combineReducers({
    AccountReducer,VisualReducer
});