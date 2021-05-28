import React, { useRef, useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import "./styles/JoinForm.css";
export default function JoinForm() {
    const { popupSign, searchUsernames, fetchProfileData, searchOptions } =
        useContext(Context);

    const userNameRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        fetchProfileData(userNameRef.current.value);
    }

    return (
        <div className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    onChange={() => searchUsernames(userNameRef.current.value)}
                    ref={userNameRef}
                    placeholder="Search Your GitHub Username"
                    className="username-input"
                    list="usernames"
                />
                <datalist id="usernames">
                    {searchOptions.map((item) => (
                        <option key={item.id} value={item.username} />
                    ))}
                </datalist>

                <button className="submit-btn">Join</button>
            </form>
            {/* Style sonra yazılacak. */}
            <button
                style={{ fontSize: 14 }}
                className="submit-btn"
                onClick={popupSign}
            >
                Join via Github
            </button>
        </div>
    );
}
