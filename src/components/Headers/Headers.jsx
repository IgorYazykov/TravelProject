import React, { useState } from "react";
import "./Headers.css"

export default function Headers() {
    const [mobileMenu, setMobileMenu] = useState(false);

    function openMobileMenu() {
        setMobileMenu(true);
    };

    function closeMobilMenu() {
        setMobileMenu(false);
    };

    return(
        <>
            <div className="fixingDisplay">
                <div className="headerContainer">
                    <div className="TexstLogo cursorDefault">
                        <p>
                            Travel
                        </p> 
                        <p>
                            Goo
                        </p>   
                    </div>
                    <div className="navigationContainer noneDispaly cursorDefault">
                        <p>
                            Home
                        </p>
                        <p>
                            About Us
                        </p>
                        <p>
                            Packages
                        </p>
                    </div>
                    <div className="imageContainer">
                        <div>
                            <img src="../../img/Favorite.svg" alt="favorite" />
                        </div>
                        <div>
                            <img src="../../img/UserIcon.svg" alt="userIcon"/>
                        </div>
                        <div onClick={openMobileMenu}>
                            <img src="../../img/pngwing.png" alt="burgerMenu"/>
                        </div>
                    </div>   
                </div>         
            </div>
            {
                mobileMenu && 
                <div className="mobileMenuContainer">
                    <div className="mobileMenu">
                        <div className="navigationContainer cursorDefault">
                            <p>
                                Home
                            </p>
                            <p>
                                About Us
                            </p>
                            <p>
                                Packages
                            </p>
                        </div>
                        <div className="buttonCloseMobMenu cursorDefault" onClick={closeMobilMenu}>
                            <p>
                                Close
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}