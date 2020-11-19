import Err from "../../assets/images/error.svg";
import {Col, Row} from "antd";
const style={
    container:{
        display:"flex",
        justifyContent:"center"
    },
    errorImg:{
        img:{
            height:"60vh",
            width:"80%",
            maxHeight:"350px"
        },
        textAlign:"center"
    }
};
const Error=(props)=>{
    return(
        <Row>
            <Col xs={24} style={style.errorImg}>
                <img style={style.errorImg.img}  src={Err} alt={"صفحه خطا"} title={"صفحه خطا"}/>
                <h1>خطا در برنامه</h1>
                <p>مشکلی در برنامه ایجاد شده لطفا صفحه را رفرش کنید یا با پشتیبانی تماس بکیرید</p>
            </Col>


        </Row>
    )
}
export default Error;
