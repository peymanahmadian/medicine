import {useParams} from "react-router-dom";
import {ServiceMenu} from "../../component";
import {Service} from "../../../models/const";
const SubService=()=>{
    let {id}=useParams();
    return(
            <ServiceMenu type={Service.GetMasterService} id={id}/>
    )
}
export default SubService;