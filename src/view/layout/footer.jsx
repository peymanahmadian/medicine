import {Layout} from "antd";
import {PhoneTwoTone,MailTwoTone} from "@ant-design/icons";
import "../../assets/styles/footer.scss";
import footerLogo from "../../assets/images/footerLogo.svg";
const Footer=()=>{
    return(
        <Layout.Footer className={"footer"}>
            <div className={"innerFooter"}>
                <div className={"part"}>
                    <div>
                        <div className={"partItem"}><div className={"iconBase"}><PhoneTwoTone/></div> <div className={"text"}>شماره تلفن تماس</div></div>
                        <div className={"partItem"}><div className={"iconBase"}><MailTwoTone /></div> <div className={"text"}>رایانامه</div></div>
                    </div>
                    <div className={"img"}>
                        <img src={footerLogo} height={75} alt={"اطلاعات وب سایت"}/>
                    </div>
                </div>
            </div>
        </Layout.Footer>
    )
}
export default Footer;