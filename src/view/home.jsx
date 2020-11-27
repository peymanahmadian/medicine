import React from "react";
import {Row,Col} from "antd";
import {Card} from "./component";
import "../assets/styles/home.scss";
//photos
import phy from "../assets/images/menu/psychology.svg";
const Home=(props)=>{
    return(
        <div className={"home"}>

            <Row justify={"center"}>
                <Col xs={24} sm={24} md={18} className={"menu"}>
                    <Row justify={"center"}>
                        <Col xs={24} sm={12} md={6} lg={6}>
                            <Card url={phy} link={"/psychology"} title={"مشاوره و روانشناسی"}/>
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