import {UserActionType} from "../models/actionTypes";
let Model={
    isLogin:false,
    userInformation:null
}
const Account=(state=Model,action)=>{
    switch (action.type) {
        case UserActionType.SetLogin:
            return{
                ...state,
                isLogin:action.param
            }
        case UserActionType.SetUser:
            return{
                ...state,
                userInformation:action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default Account;