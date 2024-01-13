import React from "react";
import "./HistoriCardAchievements.css"

export default function HistoriCardAchievements(props) {
    return(
        <div className="AchievementsCard cursorDefault">
            <img src={props.img} style={props.style} alt="img" />
            <p>
                {props.number}
            </p>
            <p>
                {props.text}
            </p>
        </div>
    );
};