//libs
import {useState} from "react";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Drawer,Col,Row} from "antd"
//imports saga
import * as sagas from "../saga";
//reducers
import combineReducers from "../reducers/combineReducers";
//redux-saga
import createSagaMiddleware from "redux-saga";
import ErrorBoundary from "./error/errorBoundray";
import Error from "./error/error";

//import component
import Header from "./layout/header";
import Footer from "./layout/footer";
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
            <Drawer
                title="عملیات کاربر"
                placement={"left"}
                closable={false}
                onClose={()=>setVisible(false)}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <Header onPress={()=>setVisible(true)}/>
            <Row justify="center">
                <Col xs={20} className={"content"}>
                    <Error/>
                </Col>
            </Row>


            <Footer/>
        </ErrorBoundary>
    </Provider>

  );
}

export default App;
