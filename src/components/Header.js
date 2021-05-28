import React, { useContext } from "react";
import "./styles/Header.css";
import { routes } from "../config/Router";
import { Link } from "react-router-dom";
import { Context } from "../contexts/ContextProvider";
export default function Header() {
    const { isAuthed } = useContext(Context);
    return (
        <header className="header">
            <a href="/">Home</a>
            <ul className="nav-list">
                <li className="nav-list-item">
                    {" "}
                    <a href="https://github.com/Schude/90pixel-kodluyoruz-akademi-2021">
                        Contribute
                    </a>
                </li>
                {/* eslint-disable-next-line array-callback-return */}
                {routes.map((route) => {
                    if (route.isNavItem) {
                        if (route.isAuthNeeded === false) {
                            return (
                                <li className="nav-list-item" key={route.title}>
                                    <Link to={route.path}>{route.title}</Link>
                                </li>
                            );
                        } else {
                            if (isAuthed) {
                                return (
                                    <li
                                        className="nav-list-item"
                                        key={route.title}
                                    >
                                        <Link to={route.path}>
                                            {route.title}
                                        </Link>
                                    </li>
                                );
                            }
                        }
                    }
                })}
            </ul>
        </header>
    );
}
