import {useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import {toggleLoading} from "./../../../actions/visualAction";
import VisualService from "../../../services/visualService";
import {Service} from "../../../models/const";
import {Col} from "antd";
import {Card} from "./../../component";
const ServiceMenu=(props)=>{
    const[menuItem,setMenuItem]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(toggleLoading(true));
        switch (props.type) {
            case Service.GetMasterServiceGroup:
                VisualService.getMasterServiceGroup()
                    .then(data=>{
                        dispatch(toggleLoading(false));
                        let dataCash=[];
                        data.data && data.data.forEach(item=>{
                            let cash={id:item.MasterServiceGroupId,name:item.MasterServiceGroupName,image:`'data:image/jpeg;base64,${item.Pic}'`};
                            dataCash.push(cash);
                        });
                        setMenuItem(dataCash);
                    })
                    .catch(e=>{
                        //@todo handle error
                    })
                break;
            case Service.GetMasterService:
                VisualService.getMasterService({id:props.id})
                    .then(data=>{
                        dispatch(toggleLoading(false));
                        let dataCash=[];
                        data.data && data.data.forEach(item=>{
                            let cash={
                                id:item.MasterServiceId,
                                name:item.MasterServiceName,
                                image:`'data:image/jpeg;base64,${item.Pic}'`,
                                hasChild:item.IsRecordChildren
                            };
                            dataCash.push(cash);
                        });
                        setMenuItem(dataCash);
                    })
                break;
            case Service.GetMasterServiceItem:
                VisualService.getMasterServiceItem({id:props.id})
                    .then(data=>{
                        dispatch(toggleLoading(false));
                        let dataCash=[];
                        data.data && data.data.forEach(item=>{
                            let cash={
                                id:item.MasterServiceId,
                                name:item.MasterServiceName,
                                image:`'data:image/jpeg;base64,${item.Pic}'`,
                                hasChild:item.IsRecordChildren
                            };
                            dataCash.push(cash);
                        });
                        setMenuItem(dataCash);
                    })
                break;
            default:
                break;
        }
    },[props.type,props.id,dispatch]);
    if(props.type===Service.GetMasterServiceGroup){
        return(
            menuItem.map(item=><Col key={item.id} xs={24} sm={12} md={6} lg={6}>
                <Card url={item.image}  link={{pathname:`service/${item.id}`}} as={item.name} title={item.name}/>
            </Col>)
        )
    }else if(props.type===Service.GetMasterService){
        return(
            menuItem.map(item=><Col key={item.id} xs={24} sm={12} md={6} lg={6}>
                <Card url={item.image}  link={item.hasChild ? {pathname:`/service/sub/${item.id}`} : {pathname:`/service/search/${item.id}`}} as={item.name} title={item.name}/>
            </Col>)
        )
    }else if(props.type===Service.GetMasterServiceItem){
        return(
            menuItem.map(item=><Col key={item.id} xs={24} sm={12} md={6} lg={6}>
                <Card url={item.image}  link={{pathname:`/service/search/${item.id}`}} as={item.name} title={item.name}/>
            </Col>)
        )
    }



}
export default ServiceMenu;