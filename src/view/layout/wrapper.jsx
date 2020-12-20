import {useState} from "react";
import {useSelector} from "react-redux";
import {Drawer, Menu} from "antd";
import {Link} from "react-router-dom";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import {Loading} from "./../component";
const Wrapper=()=>{
    const loading=useSelector(state=>state.VisualReducer.loading);
    const [visible,setVisible]=useState(false);
    return(
        <>
            {loading && <Loading text={"در حال بارگذاری اطلاعات"}/>}
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
            <Header onPress={()=>setVisible(true)}/>
            <Content/>
            <Footer/>
        </>

    )
}
export default Wrapper;