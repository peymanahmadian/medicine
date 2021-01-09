import React from "react";

import "../assets/styles/home.scss";
import {Service} from "../models/const";
//photos
import ServiceMenu from "./component/serviceMenu/serviceMenu";
//actions
const Home=()=>{
    return(<ServiceMenu type={Service.GetMasterServiceGroup} />)
}
export default Home;