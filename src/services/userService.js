import axios from "axios";
import HttpHeader from "../command/httpHeader";
//models
import {User} from "../models/urls";
class UserService{
    async authenticate(param){
        try{
            return await axios.post(User.Authenticate,param,HttpHeader(false));
        }catch (e) {
            return e;
        }

    }
    async getUser(param){
        try{
            return await axios.post(User.GetUser,param,HttpHeader(true));
        }catch (e) {
            return e;
        }
    }
}
export default new UserService();