import {useState} from "react";
import {Col, Row, Menu, Layout, Input,Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import AccountImg from "../../assets/images/account.svg";
//assets
import LogoImg from "../../assets/images/logo.svg";
import "../../assets/styles/header.scss";
import Doctor from "../../assets/images/doctorLogo.svg"
const Header=(props)=>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <Layout.Header className={"header"}>
            <Row className={"borderBottom"} justify="center">
                <div className={"greenRect"} />
                <div className={"greenCircle"}/>
                <img className={"doctorImage"} src={Doctor} alt={"doctorLogo"}/>
                <Col xs={16} lg={4}>
                    <img height={"64"} src={LogoImg} alt={"نرم افزار دارویی"} title={"نرم افزار دارویی"}/> <span className={"blueText"}>نرم افزار پزشکی</span>
                </Col>
                <Col xs={0} lg={16}  className={"menuTop"}>
                    <Menu mode="horizontal">
                        <Menu.Item className={"xs_hidden sm_hidden md_hidden"}>حساب کاربری</Menu.Item>
                        <Menu.Item className={"xs_hidden sm_hidden md_hidden"}>افزایش اعتبار</Menu.Item>
                        <Menu.Item className={"xs_hidden sm_hidden md_hidden"}>پشتیبانی</Menu.Item>
                    </Menu>
                </Col>
                <Col xs={8} lg={2}>
                    <div className={"left_btn"}>
                        <Button onClick={()=>setShowMenu(true)} className={"icon_btn"} type="primary" shape="circle" icon={<SearchOutlined />} size={"large"}/>
                        <div className={"accountButton"}><img height={"48"} src={AccountImg} alt={"ورود"} onClick={props.onPress}/></div>
                    </div>
                </Col>
            </Row>
            <div className={`header_search ${showMenu && `show animate__animated animate__slideInUp animate__faster`}`}>
                <div className={"search_box"}>
                    <div className={"buttonSearch"}>
                        <Input className={"text"} placeholder="به دنبال چه خدماتی هستید؟"/>
                        <Button className={"button"} type="primary">جستجو</Button>
                    </div>
                    <Button danger onClick={()=>setShowMenu(false)} className={"close_btn"} type="primary"  size={"large"}>
                        بستن
                    </Button>

                </div>
            </div>
        </Layout.Header>
    )
}
export default Header;