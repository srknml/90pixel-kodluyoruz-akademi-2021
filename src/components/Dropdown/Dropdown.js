import React, { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

export default function Dropdown() {
    const { handleSignout, currentUser } = useContext(Context);
    const [toggleOpen, setToggleOpen] = useState(false);
    const dropdown = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleaning Event
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdown]);

    const handleClickOutside = ({ target }) => {
        if (dropdown.current && !dropdown.current.contains(target)) {
            setToggleOpen(false);
        }
    };
    return (
        <div ref={dropdown} className="container">
            <DropdownItem
                text={currentUser && currentUser.login}
                onClick={setToggleOpen}
            />

            {toggleOpen && (
                <div className="dropdown">
                    <Link to={`/profile/${currentUser.id}`}>
                        <DropdownItem text="Your Profile" />
                    </Link>
                    <Link to="/profile_settings">
                        <DropdownItem text="Profile Settings" />
                    </Link>
                    <DropdownItem text="SignOut" onClick={handleSignout} />
                </div>
            )}
        </div>
    );
}
