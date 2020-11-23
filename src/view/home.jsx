import React from "react";
import {Row,Col,Input} from "antd";
import {Card} from "./component";
import "../assets/styles/home.scss";
//photos
import phy from "../assets/images/menu/psychology.svg";
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
                <Col xs={18} className={"menu"}>
                    <Row justify={"center"}>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}
export default Home;