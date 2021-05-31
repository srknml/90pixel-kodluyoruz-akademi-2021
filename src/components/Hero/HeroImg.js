import React from "react";

function HeroImg({ heroImg }) {
    return (
        <div className="hero-img-box">
            {" "}
            <img src={heroImg} alt="hero" />{" "}
        </div>
    );
}

export default HeroImg;
