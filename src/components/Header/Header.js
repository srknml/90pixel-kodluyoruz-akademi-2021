/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { routes } from "../../config/Router";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/ContextProvider";
import Dropdown from "../Dropdown/Dropdown";
import { Headers, NavList, NavItem } from "./styles";
const Header = () => {
    const { currentUser } = useContext(Context);
    return (
        <Headers>
            <Link to="/"> Home </Link>
            <NavList>
                <NavItem>
                    <Link
                        to={{
                            pathname:
                                "https://github.com/Schude/90pixel-kodluyoruz-akademi-2021",
                        }}
                        target="_blank"
                    >
                        Contribute
                    </Link>
                </NavItem>
                {routes.map((route) => {
                    if (route.isNavItem) {
                        return (
                            <NavItem key={route.title}>
                                <Link to={route.path}>{route.title}</Link>
                            </NavItem>
                        );
                    }
                })}
                {currentUser && (
                    <NavItem>
                        <Dropdown />
                    </NavItem>
                )}
            </NavList>
        </Headers>
    );
};
export default Header;
