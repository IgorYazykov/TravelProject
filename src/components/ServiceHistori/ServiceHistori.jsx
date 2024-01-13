import React from "react";
import "./ServiceHistori.css";
import HistoriCardAchievements from "../HistoriCardAchievements/HistoriCardAchievements";

export default function ServiceHistori() {
    const calendarStyle = {
        width: "42px",
        height: "42px",
        padding: "30px 0",
    };

    const graphAndMapStyle = {
        width: "43px",
        height: "43px",
        padding: "30.5px 0",
    };

    const gridStyle = {
        width: "35px",
        height: "35px",
        padding: "33.5px 0",
    };

    const arrWithStyle = [ calendarStyle, graphAndMapStyle, graphAndMapStyle, gridStyle ];

    const ImgArr = [
        "../../img/simple-line-icons_calender.png",
        "../../img/ant-design_bar-chart-outlined.png",
        "../../img/carbon_map.png",
        "../../img/gridicons_history.png"
    ];

    const numberOfAchievements = ["15+","15k+","650+","2k+"];

    const textOfAchievements = [
        "Years of Experience",
        "Happy Travellers",
        "Places Visited",
        "Travel History"
    ];

    return(
        <div className="ServiceHistoriImg">
            <div className="LogoAndTextContainer">
                <p className="LogoOfAchievements cursorDefault">
                    We always try to give you the best service
                </p>
                <p className="TextOfAchievements cursorDefault">
                    We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.
                </p>
            </div>
            <div className="fixingDisplayForService">
                <div className="AchievementsCardContainer">
                    {
                        ImgArr.map((elem, index) => (
                            <HistoriCardAchievements
                                key={index}
                                img={elem}
                                number={numberOfAchievements[index]}
                                text={textOfAchievements[index]}
                                style={arrWithStyle[index]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};