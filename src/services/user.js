import axios from "axios";
import LocalStorage from "../command/localStorage";
//models
import {User} from "../models/urls";
//header
export const TokenName=process.env.REACT_APP_TOKEN_NAME;
const Header=(hasToken)=>{
    if(hasToken){
        return {
            "Content-Type":"application/json"
        }
    }else{
        let value=LocalStorage.getValue(TokenName);
        if(value){
            return{
                "Content-Type":"application/json",
                "Authorization":value
            }
        }
    }
}
class UserService{
    authenticate(param){
        axios.post(User.Authenticate,param,Header).then(data=>{
            debugger;
            return(data);
        }).catch(err=>{
            debugger;
            return(err);
        })
    }
    getUser(){
        axios.post(User.GetUser,null,Header(true)).then(data=>{
            debugger;
        }).catch(err=>{
            debugger;
        })
    }
}
export default new UserService();