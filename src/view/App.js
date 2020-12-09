//libs
import {useState} from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Link} from "react-router-dom";
import {Drawer,Layout,Menu} from "antd"
//imports saga
import * as sagas from "../saga";
//reducers
import combineReducers from "../reducers/combineReducers";
//redux-saga
import createSagaMiddleware from "redux-saga";
import ErrorBoundary from "./error/errorBoundray";
//import component
import Header from "./layout/header";
import Footer from "./layout/footer";
import Content from "./layout/content";
//import global antd css
import "antd/dist/antd.css";
//init global css
import "../assets/styles/global.scss";
//init store for redux
const bindSaga=(sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
const sageMiddleware=createSagaMiddleware();
const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(sageMiddleware)))
bindSaga(sageMiddleware);

//APP
const App=()=> {
    const [visible,setVisible]=useState(false);
    return (
    <Provider store={store}>
        <ErrorBoundary>
            <Layout>
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



            </Layout>

        </ErrorBoundary>
    </Provider>

    );
}

export default App;
