import {takeEvery,call,put} from "redux-saga/effects";
import LocalStorage from "../command/localStorage";
//import Actions type
import {UserActionType} from "./../models/actionTypes";
//import Actions
import {setUser} from "./../actions/userAction";
//import Services
import UserService from "../services/userService";
//flow function
const tokenName=process.env.REACT_APP_TOKEN_NAME;
function* authenticationFN(action){
    const result=yield call(UserService.authenticate,action.param);
    if(!result.isAxiosError && result.status===200){
        LocalStorage.setValue(tokenName,result.data.TokenKey);
    }else{
        //@todo create show alert
    }

}
function* getUserFN(action){
    let tokenStatus=LocalStorage.getValue(tokenName);
    if(tokenStatus){
        const result=yield call(UserService.getUser,action.param);
        if(!result.isAxiosError && result.status===200){
            //@todo call set user action
            yield put(setUser(result.data))
        }else{
            //@todo handle login failed
        }
    }else{
        //@todo handle login failed
    }

}
//set action monitor
export function* authentication() {
    yield takeEvery(UserActionType.Authentication,authenticationFN);
}
export function* getUser(){
    yield takeEvery(UserActionType.GetUser,getUserFN);
}
