import React from "react";
import "./ThreeEasyStep.css";

export default function ThreeEasyStep() {
    const arrWithImgStep = ["../../img/selection.png","../../img/water-sport.png","../../img/taxi.png"];
    const arrWithNameOfStepe = ["Choose Destination", "Make Payment", "Reach Airport on Selected Date"];
    const yellow = {
        backgroundColor: "#F0BB1F",
    };
    const red = {
        backgroundColor: "#F15A2B",
    };
    const blue = {
        backgroundColor: "#006380",
    }
    const arrWithColor = [yellow, red, blue]

    return(
        <div className="ThreeStepToTripContainer">
            <div className="NameOfConteinerForStep cursorDefault">
                <p>
                    Book Your Next Trip in 3 Easy Steps
                </p>
                <p>
                    Easy and Fast
                </p>
            </div>
            <div className="fixingEasyStepDisplay">
                <div className="ThreeStepAndPhotoCOntainer">
                    <div className="StepContainer">
                        {
                            arrWithImgStep.map((elem,id) => (
                                <div className="boxWithStep" key={id}>
                                    <div className="boxWithIconStep" style={arrWithColor[id]}>
                                        <img src={elem} alt="step" />
                                    </div>
                                    <div className="TextOfSteps cursorDefault">
                                        <p>
                                            {arrWithNameOfStepe[id]}
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="ImgTripTo">
                        <img src="../../img/TripTo.png" alt="TripTo" />
                    </div>
                </div>
            </div>
        </div>
    )
}