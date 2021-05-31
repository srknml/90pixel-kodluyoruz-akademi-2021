import React from "react";

function DropdownItem(props) {
    return (
        <button className="dropdown-item" onClick={props.onClick}>
            {" "}
            {props.to} {props.text}{" "}
        </button>
    );
}

export default DropdownItem;
