import {Layout} from "antd";
import {Switch,Route} from "react-router-dom";
import Error from "../error/error";
//import component
import Home from "../home";
import {MainPsychology} from "./../page";
//
const Context=(props)=>{
    return(
        <Layout.Content className={"padding_vertical"}>
            <Switch>
                <Route path={"/"} exact={true} component={Home}/>
                <Route path={"/psychology"} exact={true} component={MainPsychology}/>
                <Route component={Error}/>
            </Switch>
        </Layout.Content>
    )
}
export default Context;
//todo
//create input for Error component for 404