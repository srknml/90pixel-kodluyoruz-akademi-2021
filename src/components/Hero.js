import React from 'react'
import hero from '../assets/hero-image.jpg';
import './styles/Hero.css'
export default function Hero() {
    return (
        <div className="hero" >
            <h1 className="hero-title" >90Pixel & Kodluyoruz Akademi React Katılımcıları </h1>
            <h1 className ="hero-title" >  </h1>
            <div className="hero-img-box" > <img src = {hero} alt="hero"/>  </div>
            
        </div>
    )
}
