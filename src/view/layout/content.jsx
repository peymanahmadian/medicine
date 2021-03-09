import {Layout} from "antd";
import {Switch,Route} from "react-router-dom";
import Error from "../error/error";
//import component
import Home from "../home";
import {SubService,DoctorFind,SubServiceList,DoctorDetails,Login} from "./../page";

//
const Context=()=>{
    return(
        <Layout.Content className={"padding_vertical content"}>
                    <Switch>
                        <Route path={"/"} exact={true} component={Home} />
                        <Route path={"/service/reserve"} exact={true} component={DoctorDetails} />
                        <Route path={"/service/:id"} exact={true} component={SubService} />
                        <Route path={"/service/search/:id"} exact={true} component={DoctorFind} />
                        <Route path={"/service/sub/:id"} exact={true} component={SubServiceList} />
                        <Route path={"/login"} exact={true} component={Login}/>
                        <Route component={Error}/>
                    </Switch>
        </Layout.Content>
    )
}
export default Context;
//todo
//create input for Error component for 404