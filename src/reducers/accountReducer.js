import {UserActionType} from "../models/actionTypes";
let Model={
}
const Account=(state=Model,action)=>{
    switch (action.type) {
        case UserActionType.SetUser:
            return{
                ...action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default Account;