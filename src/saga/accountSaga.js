import {takeEvery,call} from "redux-saga/effects";
//import Actions type
import {UserActionType} from "./../models/actionTypes";
//import Services
import UserService from "./../services/user";
//flow function
function* authenticationFN(action){
    debugger;
    const result=yield call(UserService.authenticate(action.param));
    console.log(result);
}
//set action monitor
export function* authentication() {
    yield takeEvery(UserActionType.Authentication,authenticationFN);
}