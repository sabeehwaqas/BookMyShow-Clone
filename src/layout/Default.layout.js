import React from "react";
import Navbar from "../components/Navbar/Navbar.component"
import HeroCaraousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
        <Navbar />
        <HeroCaraousal />
        
        {props.children}
        </>
    );
}

export default DefaultLayout;