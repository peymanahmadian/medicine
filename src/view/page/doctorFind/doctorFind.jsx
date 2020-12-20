import {Col,Row} from 'antd';
import {useParams} from "react-router-dom";
import {Available} from "../../component/available"
const DoctorFind=(props)=>{
    const params=useParams();
    return(
        <div>
            <div className={"home"}>
                <Row justify={"center"}>
                    <Col xs={24} sm={24} md={18} className={"menu"}>
                        <Row justify={"center"}>
                            <Col xs={24}>
                                <Available id={params.id}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default DoctorFind;