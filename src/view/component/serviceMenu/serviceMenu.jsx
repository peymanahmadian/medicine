import {useEffect,useState} from "react";
import VisualService from "../../../services/visualService";
import {Col} from "antd";
import {Card} from "./../../component";
const ServiceMenu=(props)=>{
    const[menuItem,setMenuItem]=useState([]);
    useEffect(()=>{
        if(props.id){
            //then this is internal menu
            VisualService.getSubMainMenu({Id:props.id}).then(data=>{
                debugger;
                let dataCash=[];
                data.data.forEach(item=>{
                    let cash={id:item.MasterServiceGroupId,name:item.MasterServiceGroupName,image:`'data:image/jpeg;base64,${item.Pic}'`};
                    dataCash.push(cash);
                });
                setMenuItem(dataCash);
            }).catch(e=>{
                debugger;
                //@todo handle error
            })
        }else{
            //the this is main menu
            //@set loading global
            VisualService.getMainMenu().then(data=>{
                debugger;
                let dataCash=[];
                data.data.forEach(item=>{
                    let cash={id:item.MasterServiceGroupId,name:item.MasterServiceGroupName,image:`'data:image/jpeg;base64,${item.Pic}'`};
                    dataCash.push(cash);
                });
                setMenuItem(dataCash);
            }).catch(e=>{
                debugger;
                //@todo handle error
            })
        }
    },[])
    return(
        menuItem.map(item=><Col key={item.id} xs={24} sm={12} md={6} lg={6}>
            <Card url={item.image} link={`service/${item.id}`} title={item.name}/>
        </Col>)

    )
}
export default ServiceMenu;