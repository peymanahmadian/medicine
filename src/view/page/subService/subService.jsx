import {useParams} from "react-router-dom";
import {ServiceMenu} from "../../component";
import {Col, Row} from "antd";
const SubService=(props)=>{
    let {id}=useParams();
    return(<div>

        <div className={"home"}>

            <Row justify={"center"}>
                <Col xs={24} sm={24} md={18} className={"menu"}>
                    <Row justify={"center"}>
                        <ServiceMenu id={id}/>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>)
}
export default SubService;