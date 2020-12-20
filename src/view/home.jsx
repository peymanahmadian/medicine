import React from "react";
import {Row,Col} from "antd";
import "../assets/styles/home.scss";
import {Service} from "../models/const";
//photos
import ServiceMenu from "./component/serviceMenu/serviceMenu";
//actions
const Home=()=>{
    return(
        <div className={"home"}>
            <Row justify={"center"}>
                <Col xs={24} sm={24} md={18} className={"menu"}>
                    <Row justify={"center"}>
                        <ServiceMenu type={Service.GetMasterServiceGroup} />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Home;