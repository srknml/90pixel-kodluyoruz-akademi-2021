import React from "react";
import ProfileCard from "./ProfileCard";
import "./styles/CardContainer.css"
export default function ProfileCardContainer(props) {
    return (
        <div className = "card-container">
            {props.profiles &&
                props.profiles.map((profile) => {
                    return  <ProfileCard key={profile.id} {...profile} />;
                })}
        </div>
    );
}
