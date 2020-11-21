import {Layout} from "antd";
import {Switch,Route} from "react-router-dom";
import Error from "../error/error";
//import component
import Home from "../home";
//
const Context=(props)=>{
    return(
        <Layout.Content className={"content"}>
            <Switch>
                <Route path={"/"} exact={true} component={Home}/>
                <Route component={Error}/>
            </Switch>
        </Layout.Content>
    )
}
export default Context;
//todo
//create input for Error component for 404