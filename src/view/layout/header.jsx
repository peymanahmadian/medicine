import {Col, Row, Menu, Layout, Input} from "antd";
import AccountImg from "../../assets/images/account.svg";
//assets
import LogoImg from "../../assets/images/logo.svg";
import "../../assets/styles/header.scss";
const Header=(props)=>{
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
                    <div className={"accountButton"}><img height={"48"} src={AccountImg} alt={"ورود"} onClick={props.onPress}/></div>
                </Col>
            </Row>
            <Row justify="center" align={"middle"} className={"header_search"}>
                <Col xs={20} lg={14} >
                    <div className={"title"}><b>نام نرم افزار</b> مشاوره آنلاین و تلفنی روانشناسی و پزشکی </div>
                    <Input.Search
                        placeholder="به دنبال چه خدماتی هستید؟"
                        allowClear
                        enterButton="جستجو"
                        size="large"
                        onSearch={()=>{}}
                    />
                </Col>
            </Row>
        </Layout.Header>
    )
}
export default Header;