//import lib
import {combineReducers} from "redux";
//import reducer
import AccountReducer from "./accountReducer";
import VisualReducer from "./visualReducer";
import DoctorReducer from "./doctorReducer";
export default combineReducers({
    AccountReducer,VisualReducer,DoctorReducer
});