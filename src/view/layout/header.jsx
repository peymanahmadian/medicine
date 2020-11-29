import {useState} from "react";
import {Col, Row, Menu, Layout, Input,Button} from "antd";
import {SearchOutlined,CloseOutlined} from "@ant-design/icons";
import AccountImg from "../../assets/images/account.svg";
//assets
import LogoImg from "../../assets/images/logo.svg";
import "../../assets/styles/header.scss";
const Header=(props)=>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <Layout.Header className={"header"}>
            <Row className={"borderBottom"} justify="center">
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
            <Row justify="center" align={"middle"} className={`header_search ${showMenu && `show animate__animated animate__slideInUp animate__faster`}`}>
                <Col xs={20} lg={14} className={"centerText"}>
                    <div className={"title"}><b>نام نرم افزار</b> مشاوره آنلاین و تلفنی روانشناسی و پزشکی </div>
                    <Input.Search
                        placeholder="به دنبال چه خدماتی هستید؟"
                        allowClear
                        enterButton="جستجو"
                        size="large"
                        onSearch={()=>{}}
                    />
                    <Button danger onClick={()=>setShowMenu(false)} className={"icon_btn"} type="primary" shape="circle" icon={<CloseOutlined />} size={"large"}/>


                </Col>
            </Row>
        </Layout.Header>
    )
}
export default Header;