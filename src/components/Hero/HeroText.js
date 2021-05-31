import React, { useEffect } from "react";

function HeroText({ text }) {
    useEffect(() => {
        makeSpans();
    }, []);
    const makeSpans = () => {
        const [...elements] = document.querySelectorAll(".hero-title");
        return elements.map((element) => {
            const text = element.innerText.split("");
            const spans = text
                .map((letter) => "<span>" + letter + "</span>")
                .join("");

            return (element.innerHTML = spans);
        });
    };
    return (
        <h1 className="hero-title">
            90Pixel &amp; Kodluyoruz Akademi React Bootcamp {text && text}
        </h1>
    );
}

export default HeroText;
