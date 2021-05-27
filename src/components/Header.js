import React ,{useContext} from "react";
import "./styles/Header.css"
export default function Header() {
    return (
        <header className = "header" >
            <a href="/" >Homepage</a>
            <ul className = "nav-list">
                <li className = "nav-list-item" > <a href= "https://github.com/Schude/90pixel-kodluyoruz-akademi-2021" >Contribute</a> </li>
            </ul>
        </header>
    );
}
