import React from "react";
import hero from "../../assets/hero-image_50.jpg";
import "../styles/Hero.css";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
export default function Hero({ text }) {
    return (
        <div className="hero">
            <HeroText text={text} />
            <HeroImg heroImg={hero} />
        </div>
    );
}
