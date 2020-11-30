import React from "react";
import {Link} from "react-router-dom";
import "./card.scss";
const Card=(props)=>{
    return(
        <Link to={props.link} class={"card"}>
            <div className={"item"}>
            <div className={"background"} style={{backgroundImage:`url(${props.url})`}} />
            <div className={"text"}>
                <span>{props.title}</span>
            </div>
            </div>
        </Link>
        )
}
export default Card;