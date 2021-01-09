import {useParams} from "react-router-dom";
import {Available} from "../../component/available"
const DoctorFind=(props)=>{
    const params=useParams();
    return(
        <Available id={params.id}/>
    )
}
export default DoctorFind;