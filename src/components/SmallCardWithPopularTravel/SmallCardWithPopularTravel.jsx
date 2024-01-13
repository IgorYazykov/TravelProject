import React from "react";
import "./SmallCardWithPopularTravel.css";

export default function SmallCardWithPopularTravel(props) {
    return(
        <div className="SmallCardPopularTravel cursorDefault">
            <img src={props.img} alt="CountryPhoto"/>
            <p>{props.name}</p>
            <p>{props.text}</p>
            <p>{`>`}</p>
        </div>
    );
};