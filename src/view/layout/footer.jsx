import {Row,Col} from "antd";
import "../../assets/styles/footer.scss";
const Footer=(props)=>{
    return(
        <Row justify="center" className={"footer"}>
            <Col lg={{span:6,offset:1}} md={{span:6,offset:1}} xs={24} className={"part"}>
                <div className={"title"}>پشتیبانی و راهنمایی</div>
                <div>شماره تلفن تماس</div>
                <div>ایمیل</div>
            </Col>
            <Col lg={{span:6,offset:1}} md={{span:6,offset:1}} xs={24} className={"part"}>
                <div className={"title"}>پشتیبانی و راهنمایی</div>
                <div>شماره تلفن تماس</div>
                <div>ایمیل</div>
            </Col>
            <Col lg={{span:6,offset:1}} md={{span:6,offset:1}} xs={24} className={"part"}>
                <div className={"title"}>پشتیبانی و راهنمایی</div>
                <div>شماره تلفن تماس</div>
                <div>ایمیل</div>
            </Col>
        </Row>
    )
}
export default Footer;