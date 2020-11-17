//libs
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
//imports saga
import * as sagas from "../saga";
//reducers
import combineReducers from "../reducers/combineReducers";
//redux-saga
import createSagaMiddleware from "redux-saga";
import ErrorBoundary from "./error/errorBoundray";
import Error from "./error/error";
//init global css
import "../assets/styles/global.scss";
//import component
import Header from "./layout/header";
import Footer from "./layout/footer";
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
            <Header/>
            <Error/>
            <Footer/>
        </ErrorBoundary>
    </Provider>

  );
}

export default App;
