import React from "react";
import "./CardService.css";

export default function CardService(props) {
    return(
        <div className="ServiceBlock">
            <img src={props.img} alt="img" />
            <p>
                {props.logo}
            </p>
            <p>
                {props.text}
            </p>
        </div>
    );
};