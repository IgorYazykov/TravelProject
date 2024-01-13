import React from "react";
import "./Service.css";
import CardService from "../CardService/CardService";

export default function Service() {

    const logoOfCardArr = ["Ticket Booking", "Hotel Booking", "Tour Plan"];
    const  textOfCardArr = [
        "We book all kind of national or international ticket for your destinaion.",
        "You can easily book your according to your budget hotel by our website.",
        "We provide you the best plan within a short ime explore more."
    ];
    const ImgArr = [
        "../../img/Vector.png",
        "../../img/carbon_hotel.png",
        "../../img/cil_paper-plane.png"
    ];

    return(
        <div className="ServiceContainerAndLogo">
            <p className="LogoService cursorDefault">
                Our Service
            </p>
            <div className="fexingDisplay">
                <div className="ServiceInfoContainer">
                    {
                        ImgArr.map((elem, index) => (
                            <CardService
                                key={index}
                                img={elem}
                                logo={logoOfCardArr[index]}
                                text={textOfCardArr[index]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
