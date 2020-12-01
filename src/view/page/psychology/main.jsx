import {Col, Row} from "antd";
import {Card} from "../../component/card";
import phy from "../../../assets/images/menu/psychology.svg";
import React from "react";

const Main=(props)=>{
    return(<div>
        <Row justify={"center"}>
            <Col xs={24} sm={24} md={18} className={"menu"}>
                <Row justify={"center"}>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} link={"/psychology/personal"}  title={"اضطراب ، افسردگی و مسائل فردی"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"مشاوره جنسی"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"ازدواج موفق و رابطه زناشویی پایدار"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"موفقیت شغلی و تحصیلی"}/>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"ترک اعتیاد"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"فرزند شاد و سالم"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"نوجوانی و بلوغ"}/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <Card url={phy} title={"توانبخشی و بیماری های خاص"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>)
}
export default Main;