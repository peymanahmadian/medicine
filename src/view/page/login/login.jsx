import {useState} from "react";
import {MessageOutlined} from "@ant-design/icons";
import "./login.scss";
import UserService from "../../../services/userService";
import mobile from "../../../assets/images/mobile.svg"
import {Input,Button} from "antd";
const Login=()=>{
    const [phoneNumber,setPhoneNumber]=useState("");
    const [caption,setCaption]=useState("ارسال پیامک");
    const [disable,setDisable]=useState(false);
    const [sendCode,setSendCode]=useState(false);
    const [code,setCode]=useState(null);
    const sendPhoneNumber=async()=>{
        const res=await UserService.sendSMS({id:"09"+phoneNumber});
        if(res.status===200){
            setDisable(true);
            setSendCode(true);
            let totalSec=120;
            let timer=setInterval(()=>{
                let min = parseInt(totalSec / 60, 10);
                let sec = parseInt(totalSec % 60, 10);
                let minutes = min < 10 ? "0" + min : min;
                let seconds = sec < 10 ? "0" + sec : sec;
                totalSec--;
                setCaption(`ارسال مجدد پس از ${minutes}:${seconds}`);
                if(!totalSec){
                    setCaption("ارسال پیامک");
                    clearInterval(timer);

                }
            },1000);

        }else{
            //@todo show message
        }

    }
    const evaluationSMS=async ()=>{
        const res=await UserService.evaluationSMS({"Id":"09"+phoneNumber,"Note":code});
        debugger;
        if(res.status===200 && res.data===1){
            //@todo redirect to other page

        }else{
            //@todo show message
        }
    }
    return (<div className={"loginContainer"}>
        <img className={"mobileIcon"} src={mobile} alt={"ورود با موبایل"}/>
        <div className={"rect"}>
            <div className={"registerBottom"}>
                {
                    !sendCode ?
                        <div><Input addonAfter={"09"} value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} block placeholder={"شماره موبایل خود را وارد نمایید"} maxLength={9}/></div>
                        :
                        <div><Input addonAfter={<MessageOutlined />} value={code} onChange={(e)=>setCode(e.target.value)} block placeholder={"کد پیامک شده را وارد نمایید"} maxLength={9}/></div>

                }

                {sendCode && <div><Button onClick={()=>evaluationSMS()} block type="primary">ثبت کد</Button></div>}
                <div><Button className={"endButton"} danger type="primary" disabled={phoneNumber.length<9 || disable} block onClick={()=>{sendPhoneNumber()}}>{caption}</Button></div>

            </div>
        </div>
    </div>)
}
export default Login;