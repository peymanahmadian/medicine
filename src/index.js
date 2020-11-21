//import libs
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
//import component
import App from './view/App';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ConfigProvider direction="rtl">
            <App />
        </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
