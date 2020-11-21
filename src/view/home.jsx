import React from "react";
import {Row,Col,Input} from "antd";
import "../assets/styles/home.scss";
const Home=(props)=>{
    return(
        <div className={"home"}>
            <Row justify="center" align={"middle"} className={"header"}>
                <Col xs={20} lg={14} >
                    <Input.Search
                        placeholder="به دنبال چه خدماتی هستید؟"
                        allowClear
                        enterButton="جستجو"
                        size="large"
                        onSearch={()=>{}}
                    />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} className={"menu"}>

                </Col>
            </Row>
        </div>
    )
}
export default Home;