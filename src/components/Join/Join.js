import React, { useContext } from "react";
import { Context } from "../../contexts/ContextProvider";
import Button from "../Button/Button";
import { Container } from "./styles";
const Join = () => {
    const { popupSign } = useContext(Context);

    return (
        <Container>
            <h3> lorem asdadasdasdasdadasdasda</h3>

            <Button onClick={popupSign} text="Signup via Github"></Button>
        </Container>
    );
};
export default Join;
