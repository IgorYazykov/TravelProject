import React from "react";
import "./MapWithPopularTravel.css";
import SmallCardWithPopularTravel from "../SmallCardWithPopularTravel/SmallCardWithPopularTravel";

export default function MapWithPopularTravel() {
    const arrWithImg = ["../../img/Thailand.png", "../../img/Indonesia.png", "../../img/NewZeland.png"];
    const NameOfCard = ["Thailand", "Indonesia", "New Zeland"];
    const TextOfCard = ["20+ Spots 2D & 3N", "25+ Spots 3D & 3N", "20+ Spots 3D & 2N"]


    return (
        <div className="PopularTravelContainer">
            <div className="TitleOfPopularTravel cursorDefault">
                <p> Our Popular Distinations</p>
            </div>
            <div className="fixingForPopularTravel">
                <div className="mapAndPopularTravel">
                    <img className="imgMap" src="../../img/world_map_popular_travel_with_point.png" alt="WorldWithPopularTravel"/>
                    <div className="SmallCardContainer">
                        {
                            arrWithImg.map((elem, id) => (
                                <SmallCardWithPopularTravel
                                    key={id}
                                    img={elem}
                                    name={NameOfCard[id]}
                                    text={TextOfCard[id]}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};