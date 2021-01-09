import {useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import {toggleLoading} from "../../../actions/visualAction";
import VisualService from "../../../services/visualService";
import Item from "./item/item";
import {Col, Row} from "antd";
const style={
    backgroundColor: "white",
    width: "100%",
    minHeight: "380px",
    marginTop: "4px",
    boxShadow: "0 0 4px #57b3f6",
    borderRadius: "4px"
}
const Available=(props)=>{
    const dispatch=useDispatch();
    const [result,setResult]=useState([]);
    useEffect(()=>{
        dispatch(toggleLoading(true));
        VisualService.getPractitioner({id:props.id})
            .then(data=>{
                dispatch(toggleLoading(false));
                setResult(data.data);
            })
    },[props.id,dispatch]);
    return(
        <Row>
            <Col xs={0} sm={0} md={6}>
                <div style={style}></div>
            </Col>
            <Col xs={24} sm={24} md={18}>
                {result.map(item=><Item model={item} key={item.RowId} />)}
            </Col>
        </Row>

    )
}
export default Available;