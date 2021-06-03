import React from "react";
import { DefaultButton } from "./styles";

function Button(props) {
    return <DefaultButton onClick={props.onClick}>{props.text}</DefaultButton>;
}

export default Button;
