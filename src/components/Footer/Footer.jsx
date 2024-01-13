import React from "react";
import "./Footer.css";

export default function Footer() {
    const arrWithTitle = ["Company","Contact","More"];
    const arrWithTitleLink = [
        ["About","Careers","Mobile"],
        ["Help/FAQ","Press","Affilates"],
        ["Airlinefees","Airline","Low fare tips"]
    ];
    const arrWithImgSocial = [
        "../../img/pngegg (2).png",
        "../../img/pngegg (1).png",
        "../../img/pngegg (3).png"
    ];
    const arrWithColor = [
        "white",
        "violet",
        "blue"
    ];
    const arrWithImgAppStore = [
        "../../img/google-play 1.png",
        "../../img/apple (2) 1.png"
    ];
    const arrWithTextForStore = [
        "Get it on Google Play",
        "Get it on App Store"
    ];

    return(
        <>
            <div className="FixingFooterDisplay">
                <div className="footerContainer">
                    <div className="logoContainerInFoter cursorDefault">
                        <p>
                            Travel Goo   
                        </p> 
                        <p>
                            Book your trip in minute, get full
                            Control for much longer.
                        </p>
                    </div>
                    <div className="containerForLink">
                        {
                            arrWithTitleLink.map((titleLink,id)=>(
                                <div key={id} className="OneBlockWithLink cursorDefault">
                                    <p className="TitleLink">
                                        {arrWithTitle[id]}
                                    </p>
                                    <p className="Link">
                                        {titleLink[0]}
                                    </p>
                                    <p className="Link">
                                        {titleLink[1]}
                                    </p>
                                    <p className="Link">
                                        {titleLink[2]}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="ContainerWithSocial">
                        <div className="conteinerForSocialCircle">
                            {
                                arrWithImgSocial.map((img,id)=>(
                                    <div className="socialCircle" key={id} style={{ backgroundColor: arrWithColor[id] }} >
                                        <img src={img} alt="social" />
                                    </div>
                                ))
                            }
                        </div>
                        <p className="smallText cursorDefault">
                            Discover our app
                        </p>
                        <div className="containerForImg">
                            {
                                arrWithImgAppStore.map((img, id)=>(
                                    <div className="buttonForStoreApp" key={id}>
                                        <img src={img} alt="storeImg" />
                                        <p>
                                            {arrWithTextForStore[id]}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="allRights cursorDefault">
                <p>
                    All rights reserved@travelgoo.com
                </p>
            </div>
        </>
    )
}