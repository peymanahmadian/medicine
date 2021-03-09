import {useState} from "react";
import {useSelector} from "react-redux";
import {Drawer, Menu} from "antd";
import {Link,useHistory} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import {Loading} from "./../component";
import Content from "./content";
const Wrapper=()=>{
    const history=useHistory();
    const loading=useSelector(state=>state.VisualReducer.loading);
    const isLogin=useSelector(state=>state.AccountReducer.isLogin);
    const [visible,setVisible]=useState(false);
    const accountAction=()=>{
        if(isLogin){
            setVisible(true)
        }else{
            history.push("/login");
        }
    }
    return(
        <>
            {loading && <Loading text={"در حال بارگذاری اطلاعات"}/>}
            {isLogin &&
                <Drawer
                    title="عملیات کاربر"
                    placement={"left"}
                    closable={false}
                    onClose={()=>setVisible(false)}
                    visible={visible}
                >
                    <Menu onClick={()=>setVisible(false)}>
                        <Menu.Item className={"xl_hidden lg_hidden"}><Link to={"/account"}>حساب کاربری</Link></Menu.Item>
                        <Menu.Item className={"xl_hidden lg_hidden"} ><Link to={"/charge"}>افزایش اعتبار</Link></Menu.Item>
                        <Menu.Item className={"xl_hidden lg_hidden"}><Link to={"/support"}>پشتیبانی</Link></Menu.Item>
                    </Menu>



                </Drawer>
            }


            <Header onPress={()=>accountAction()}/>
            <Content/>
            <Footer/>
        </>

    )
}
export default Wrapper;