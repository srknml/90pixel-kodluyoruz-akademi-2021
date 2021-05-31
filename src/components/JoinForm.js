import React, { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import "./styles/JoinForm.css";
const JoinForm = () => {
    const { popupSign } = useContext(Context);

    return (
        <div className="form-section">
            <button
                style={{ fontSize: 14 }}
                className="submit-btn"
                onClick={popupSign}
            >
                Join via Github
            </button>
        </div>
    );
};
export default JoinForm;
