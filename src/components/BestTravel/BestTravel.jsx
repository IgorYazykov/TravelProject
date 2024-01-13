import React from "react";
import "./BestTravel.css";
import SmallCardWithBestTravel from "../SmallCardWithBestTravel/SmallCardWithBestTravel";

export default function BestTravel() {
    const arrWithBestPackages = ["Hot Deals", "Backpack", "South Asia", "Honeymoon", "Europe", "More"];
    const arrWithPhotoOfPackages = ["../../img/japan.png", "../../img/indonesia2.png", "../../img/Mountains.png"];
    const arrWithAmountOfDays = ["3 Days, 2 NIghts", "3 Days, 2 NIghts", "3 Days, 2 NIghts"];
    const arrWithPrice = ["$500 / Person", "$800 / Person", "$600 / Person"];
    const ArrWithTextOfCard = [
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
        "Enjoy the Shrimes and blossoms here in this beautiful country",
        "Explore the majestic mountains and landscapes day and nights"
    ];
    const arrWithNameOfCountri = ["Indonesia1", "Japan", "Mountains"];

    return(
        <div className="BestTravelContainer">
            <p className="LogoOfBestPackages cursorDefault">Best Packages For You</p>
            <div className="fixingBestTravelDisplay">
                <div className="ButtonContainer">
                    {
                        arrWithBestPackages.map((elem, id) => (
                            <div className="ButtonOfBestTravel" key={id}>
                                <p>
                                    {elem}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="CardOfBestTravelContainer">
                    {
                        arrWithPhotoOfPackages.map((elem, id) => (
                            <SmallCardWithBestTravel
                                key={id}
                                img={elem}
                                amountOfDays={arrWithAmountOfDays[id]}
                                price={arrWithPrice[id]}
                                text={ArrWithTextOfCard[id]}
                                nameCountri={arrWithNameOfCountri[id]}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="discoverButtonContainer">
                <div className="DiscoverButton">
                    <p>
                        Discover More
                    </p>
                </div>
            </div>
        </div>
    );
};