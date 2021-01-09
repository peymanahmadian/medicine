import {Col, Row} from "antd";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import "./item.scss";
import {setInformation} from "../../../../actions/doctorAction";
const Item=(props)=>{
    const {model}=props;
    const dispatch=useDispatch();
    const history = useHistory();
    const setInfo=(item)=>{
        dispatch(setInformation(item));
        history.push("/service/reserve");
    }
    return(
        <div className={"item button "}>
            <Row justify={"center"}>
                <Col xs={24} sm={24} md={16}>
                    <div className={"infoItem"}>
                        <div className={"background"} style={{backgroundImage:`url('data:image/jpeg;base64,${model.Pic}')`}} />
                        <div className={"basicInfo"}>
                            <strong className={"fullNameInfo"}>{model.FullName}</strong>
                            <div className={"titleInfo"}>{model.Title}</div>
                        </div>
                    </div>


                </Col>
                <Col xs={24} sm={24} md={8} className={"priceInfo"}>
                    <div>
                        <button className="bttn-float bttn-sm bttn-primary" onClick={()=>setInfo(model)}>دریافت مشاوره</button>
                        {/*<Button className={"bttn-unite bttn-md"} type="primary" shape="round" size={"medium"} block onClick={()=>setInfo(model)}>دریافت مشاوره</Button>*/}
                    </div>


                </Col>
            </Row>
        </div>
    )
}
export default Item;