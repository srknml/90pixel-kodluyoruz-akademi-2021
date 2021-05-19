import React, { useState } from "react";
import axios from "axios";
import { dbMethods } from "../database/databaseMethods";
import "./styles/JoinForm.css"
export default function JoinForm(props) {
    const [username, setUsername] = useState("");

    function fetchProfileData(username) {
        const url = `https://api.github.com/users/${username}`;
        axios
            .get(url)
            .then((res) => {
                const profile = {
                    id: res.data.id.toString(),
                    name: res.data.name,
                    repos: res.data.public_repos,
                    location: res.data.location,
                    username: res.data.login,
                    image: res.data.avatar_url,
                    email: res.data.email,
                    profilLink: res.data.html_url,
                    reposLink: res.data.repos_url
                };
                dbMethods.create(profile);
                props.fetchAndSetProfiles();
            })
            .catch((err) => {
                console.log(err)
                alert("Lütfen geçerli bir kullanıcı adı giriniz.")
            });
    }
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
