import React from "react";
import {Link} from "react-router-dom";
import "./card.scss";
const Card=(props)=>{
    return(
        <Link to={props.link} className={"card"}>
            <div className={"item"}>
                <div className={"circle"} />
                <div className={"background"} style={{backgroundImage:`url(${props.url})`}} />
                <div className={"hover"} />
                <div className={"text"}>
                    <div>{props.title}</div>
                </div>
            </div>
        </Link>
        )
}
export default Card;