import axios from "axios";
import HttpHeader from "../command/httpHeader";
//models
import {Visual as VisualURL} from "../models/urls";
class VisualService{
    async getMasterServiceGroup(){
        try{
            return await axios.post(VisualURL.GetMasterServiceGroup,null,HttpHeader(false));
        }catch (e) {
            return e;
        }

    }
    async getMasterService(param){
        try{
            return await axios.post(VisualURL.GetMasterService,param,HttpHeader(false));
        }catch (e) {
            return e;
        }
    }
    async getMasterServiceItem(param){
        try{
            return await axios.post(VisualURL.GetMasterServiceItem,param,HttpHeader(false));
        }catch (e) {
            return e;
        }
    }
    async getPractitioner(param){
        try{
            return await axios.post(VisualURL.GetPractitioner,param,HttpHeader(false));
        }catch (e) {
            return e;
        }
    }
}
export default new VisualService();