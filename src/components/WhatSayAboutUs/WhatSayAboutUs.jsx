import React, { useEffect, useState } from "react";
import "./WhatSayAboutUs.css"

export default function WhatSayAboutUs() {
    const [ShowElem0, setShowElem0] = useState(true);
    const [ShowElem1, setShowElem1] = useState(false);
    const [ShowElem2, setShowElem2] = useState(false);
    const [CounterOfSlid, setCounterOfSlid] = useState(0);
    const ArrWithElem = [ShowElem0,ShowElem1,ShowElem2];
    const ArrWithSetElem = [setShowElem0,setShowElem1,setShowElem2];
    const ArrWithImgCity = [
        "../../img/city(1).jpg",
        "../../img/city(2).jpg",
        "../../img/city(3).jpg"
    ];
    const ArrWithPeople = [
        "../../img/attractive-1869761_1280.jpg",
        "../../img/happy-1836445_1280.jpg",
        "../../img/woman-3287956_1280.jpg"
    ];
    const ArrWithText = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore nostrum explicabo molestiae placeat temporibus?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et nam ab asperiores earum molestias, laudantium natus ipsum voluptate aut!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia rem nobis quasi nulla velit harum maxime voluptatum?"
    ];
    const ArrWithName = [
        "Anna",
        "Maks",
        "Diana"
    ]
    
    function minusIdOfArr() {
        if (CounterOfSlid === 0){
        } else {
            setCounterOfSlid(CounterOfSlid - 1)
        }
    };

    function plusIdOfArr() {
        if (CounterOfSlid === 2){
        } else {
            setCounterOfSlid(CounterOfSlid + 1)
        }
    };

    useEffect(()=>{
        ArrWithSetElem.forEach((elem) => {
            elem(false)
        })
        ArrWithSetElem[CounterOfSlid](true)

    }, [CounterOfSlid] );

    return(
        <div className="whatSayAboutUs">
            <p className="logoOfReviews cursorDefault">
                What People Say About Us
            </p>
            <div className="fixingDisplayAboutUs">
                <div className="reviewsContainer">
                    <div className="arrowContainer" onClick={minusIdOfArr}>
                        <img className="boxWithArrow" src="../../img/pngegg.png" alt="arrowLeft" />
                    </div>
                    {  
                        ArrWithElem[CounterOfSlid] && <div className="AnimationForIMG">
                            <div className="containerForFeedback">
                                <img className="imgOfCity" src={ArrWithImgCity[CounterOfSlid]} alt="city" />
                                <img className="imgOfPeople" src={ArrWithPeople[CounterOfSlid]} alt="people" />
                                <div className="divWithFeedback">
                                    <p className="textWithFeedback cursorDefault">
                                        {
                                            ArrWithText[CounterOfSlid]
                                        }
                                    </p>
                                    <p className="textWithName cursorDefault">
                                        - { ArrWithName[CounterOfSlid] }
                                    </p>
                                </div>
                            </div> 
                        </div>    
                    }
                    <div className="arrowContainer" onClick={plusIdOfArr}>
                        <img className="boxWithArrow" src="../../img/pngegg1.png" alt="arrowRight" />
                    </div>
                </div>
            </div>
            <div className="reviewersContainerForNavigation">
            {
                ArrWithPeople.map((imgPeople, id) => (
                    <div key={id} className="iconReviewer" onClick={()=>{setCounterOfSlid(id)}}>
                        <img src={imgPeople} alt="reviewer"/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};
