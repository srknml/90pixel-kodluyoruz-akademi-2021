import React,{useEffect} from "react";
import hero from "../assets/hero-image_50.jpg";
import "./styles/Hero.css";
export default function Hero() {
 
    useEffect(() => {
        makeSpans()
    }, []);
    const makeSpans = () => {
        const [...elements] = document.querySelectorAll(".hero-title")
        return elements.map(element => {
          const text = element.innerText.split('')
          const spans = text
            .map(letter => '<span>' + letter + '</span>')
            .join('')
          return element.innerHTML = spans
        })
      }
      


    return (
        <div className="hero">
            <h1

                className="hero-title"
            >
                90Pixel &amp; Kodluyoruz Akademi React Katılımcıları
            </h1>
            <div className="hero-img-box">
                {" "}
                <img src={hero} alt="hero" />{" "}
            </div>
        </div>
    );
}
