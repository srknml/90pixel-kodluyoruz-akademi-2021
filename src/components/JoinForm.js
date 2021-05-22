import React, { useRef, useEffect } from "react";
import { authMethods } from "../database/GithubAuth";
import "./styles/JoinForm.css";
export default function JoinForm(props) {
    const { fetchProfileData, searchOptions, searchUsernames, setProfile } =
        props;

    const userNameRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        fetchProfileData(userNameRef.current.value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        let user = await authMethods.getUserInfo();
        if (user) {
            const profileData = {
                id: user.data.id.toString(),
                name: user.data.name,
                repos: user.data.public_repos,
                location: user.data.location,
                username: user.data.login,
                image: user.data.avatar_url,
                email: user.data.email,
                profilLink: user.data.html_url,
                reposLink: user.data.repos_url,
            };
            setProfile(profileData);
        }
    }, [setProfile]);

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

                <button className="submit-btn">Join</button>
            </form>
            {/* Style sonra yazılacak. */}
            <button
                style={{ fontSize: 14 }}
                className="submit-btn"
                onClick={authMethods.sign}
            >
                Join via Github
            </button>
        </div>
    );
}
