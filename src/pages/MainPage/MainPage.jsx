import React from "react";
import Headers from "../../components/Headers/Headers";
import MainLogoElement from "../../components/MainLogoElement/MainLogoElement";
import Service from "../../components/Service/Service";
import ServiceHistori from "../../components/ServiceHistori/ServiceHistori";
import MapWithPopularTravel from "../../components/MapWithPopularTravel/MapWithPopularTravel";
import BestTravel from "../../components/BestTravel/BestTravel";
import ThreeEasyStep from "../../components/ThreeEasyStep/ThreeEasyStep";
import WhatSayAboutUs from "../../components/WhatSayAboutUs/WhatSayAboutUs";
import SubscribeBoard from "../../components/SubscribeBoard/SubscribeBoard";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
    return(
        <>
            <Headers/>
            <MainLogoElement/>
            <Service/>
            <ServiceHistori/>
            <MapWithPopularTravel/>
            <BestTravel/>
            <ThreeEasyStep/>
            <WhatSayAboutUs/>
            <SubscribeBoard/>
            <Footer/>
        </>
    );
}
