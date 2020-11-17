import Err from "../../assets/images/error.svg";
const style={
    container:{
        display:"flex",
        justifyContent:"center"
    },
    errorImg:{
        img:{
            height:"450px"
        },
        textAlign:"center"
    }
};
const Error=(props)=>{
    return(
        <section style={style.container}>
            <div style={style.errorImg}>
            <img style={style.errorImg.img}  src={Err} alt={"صفحه خطا"} title={"صفحه خطا"}/>
            <h1>خطا در برنامه</h1>
            <p>مشکلی در برنامه ایجاد شده لطفا صفحه را رفرش کنید یا با پشتیبانی تماس بکیرید</p>
            </div>


        </section>
    )
}
export default Error;
