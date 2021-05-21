import React, { useRef } from "react";
import "./styles/JoinForm.css";
export default function JoinForm({
    fetchProfileData,
    searchOptions,
    searchUsernames,
}) {
    const userNameRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        fetchProfileData(userNameRef.current.value);
    }
    const searchOnChange = () => {
        searchUsernames(userNameRef.current.value);
    };
    return (
        <div className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    onChange={searchOnChange}
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

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
