/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./styles/Header.css";
import { routes } from "../config/Router";
import { Link } from "react-router-dom";
import { Context } from "../contexts/ContextProvider";
import Dropdown from "./Dropdown/Dropdown";
const Header = () => {
    const { currentUser } = useContext(Context);
    return (
        <header className="header">
            <Link to="/"> Home </Link>
            <ul className="nav-list">
                <li className="nav-list-item">
                    {" "}
                    <a href="https://github.com/Schude/90pixel-kodluyoruz-akademi-2021">
                        Contribute
                    </a>
                </li>
                {routes.map((route) => {
                    if (route.isNavItem) {
                        return (
                            <li className="nav-list-item" key={route.title}>
                                <Link to={route.path}>{route.title}</Link>
                            </li>
                        );
                    }
                })}
                {currentUser && (
                    <li className="nav-list-item">
                        <Dropdown />{" "}
                    </li>
                )}
            </ul>
        </header>
    );
};
export default Header;
