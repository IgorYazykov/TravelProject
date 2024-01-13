import React from "react";
import "./SmallCardWithBestTravel.css";

export default function SmallCardWithBestTravel(props) {
    return(
        <div className="CardOfBestTravel">
            <img className="imgOfCountri" src={props.img} alt="countri"/>
            <div className="PriceAndNameContainer cursorDefault">
                <p>
                    {props.nameCountri}
                </p>
                <p>
                    {props.price}
                </p>
            </div>
            <p className="textOfCardTravel cursorDefault">
                {props.text}
            </p>
            <div className="underDownContainer">
                <div className="location">
                    <img src="../../img/ep_location.png" alt="mapPoint" />
                    <p className="locationName">
                        {props.nameCountri}
                    </p>
                </div>
                <p className="KnowMore">
                    Know More
                </p>
            </div>
        </div>
    );
};