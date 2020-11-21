import {Col,Row,Menu,Layout} from "antd";
import AccountImg from "../../assets/images/account.svg";
//assets
import LogoImg from "../../assets/images/logo.svg";
import "../../assets/styles/header.scss";
const Header=(props)=>{
    return(
        <Layout.Header>
            <Row className={"header borderBottom"} justify="center">
                <Col xs={16} lg={4}>
                    <img height={"64"} src={LogoImg} alt={"نرم افزار دارویی"} title={"نرم افزار دارویی"}/> <span className={"blueText"}>نرم افزار پزشکی</span>
                </Col>
                <Col xs={0} lg={{span:8,offset:8}}  className={"menuTop"}>
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
        </Layout.Header>
    )
}
export default Header;