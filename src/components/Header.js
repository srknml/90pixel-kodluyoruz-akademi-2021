import React from "react";
import "./styles/Header.css"
export default function Header() {
    return (
        <header className = "header" >
            <a href="/" >Homepage</a>
            <ul className = "nav-list">
                <li className = "nav-list-item" > <a href= "www.google.com" >Contribute</a> </li>
            </ul>
        </header>
    );
}
