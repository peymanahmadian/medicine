import React from "react";

import "./card.scss";
const Card=(props)=>{
    return(
        <div className={"card"}>
        <div className={"background"} style={{backgroundImage:`url(${props.url})`}} />
        <div className={"text"}>
            <span>مشاوره و روانشناسی</span>
        </div>
        </div>
        )
}
export default Card;