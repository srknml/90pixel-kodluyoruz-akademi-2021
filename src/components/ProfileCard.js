import React from "react";
import "./styles/ProfileCard.css";
import { Link } from "react-router-dom";
export default function ProfileCard(profile) {
    return (
        <div className="profile-card">
            <div className="profile-imgBox">
                <img
                    className="profile-img"
                    src={`${profile.avatar_url}`}
                    alt={profile.name}
                />
            </div>
            <div className="profile-content">
                <div className="content-section">
                    <span className="name">
                        <Link to={`/profile/${profile.id}`}>
                            {profile.name ? profile.name : profile.login}{" "}
                        </Link>
                    </span>
                    <span>
                        {profile.location ? profile.location : "belirtilmemiş"}
                    </span>
                </div>
                <div className="content-section">
                    <span>
                        {" "}
                        <a href={profile.html_url}>GitHub</a>{" "}
                    </span>
                    {/* Linkedin Profil Linki */}
                </div>
            </div>
        </div>
    );
}
