import axios from "axios";
import HttpHeader from "../command/httpHeader";
//models
import {Visual as VisualURL} from "../models/urls";
class VisualService{
    async getMainMenu(){
        try{
            return await axios.post(VisualURL.GetMainMenu,HttpHeader(true));
        }catch (e) {
            return e;
        }

    }
    async getSubMainMenu(param){
        try{
            return await axios.post(VisualURL.GetSubMainMenu,param,HttpHeader(true));
        }catch (e) {
            return e;
        }
    }
}
export default new VisualService();