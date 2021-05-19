import React from "react";
import "./styles/ProfileCard.css";
export default function ProfileCard(profile) {
    return (
        <div key={profile.id} className="profile-card">
            <div className="profile-imgBox">
                <img
                    className="profile-img"
                    src={`${profile.image}`}
                    alt={profile.name}
                />
            </div>
            <div className="profile-content">
                <div className="content-section">
                    <span className="name">
                        {profile.name ? profile.name : "belirtilmemiş"}
                    </span>
                    <span>
                        {profile.location ? profile.location : "belirtilmemiş"}
                    </span>
                </div>
                <div className="content-section">
                    <span>
                        {" "}
                        <a href={profile.profilLink}>GitHub</a>{" "}
                    </span>
                    {/* Linkedin Profil Linki */}
                </div>
            </div>
        </div>
    );
}
