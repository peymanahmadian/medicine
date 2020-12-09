import {useEffect} from "react";
import {Layout} from "antd";
import {Switch,Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUser} from "../../actions/userAction";
import Error from "../error/error";
//import component
import Home from "../home";
import {SubService} from "./../page";

//
const Context=(props)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        debugger;
        dispatch(getUser({UserName:"system",Password:"system@2000"}))
    })
    return(
        <Layout.Content className={"padding_vertical content"}>
            <Switch>
                <Route path={"/"} exact={true} component={Home}/>
                <Route path={"/service/:id"} exact={true} component={SubService}/>
                <Route component={Error}/>
            </Switch>
        </Layout.Content>
    )
}
export default Context;
//todo
//create input for Error component for 404