import React, { useState } from "react";
import "./styles/JoinForm.css"
export default function JoinForm({fetchProfileData}) {
    const [username, setUsername] = useState("");

    
    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    async function handleSubmit(event) {
        event.preventDefault();
        fetchProfileData(username);
    }
    return (
        <div className="form-section" >
            <form className="form" onSubmit={handleSubmit}>
                <input placeholder="GitHub Username..." className = "username-input" onChange={handleChange} value={username} />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}
