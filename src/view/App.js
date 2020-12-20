//libs
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Layout} from "antd"
//imports saga
import * as sagas from "../saga";
//reducers
import combineReducers from "../reducers/combineReducers";
//redux-saga
import createSagaMiddleware from "redux-saga";
import ErrorBoundary from "./error/errorBoundray";
//import component
import Wrapper from "./layout/wrapper";
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
    return (
    <Provider store={store}>
        <ErrorBoundary>
            <Layout>
                <Wrapper/>
            </Layout>
        </ErrorBoundary>
    </Provider>

    );
}

export default App;
