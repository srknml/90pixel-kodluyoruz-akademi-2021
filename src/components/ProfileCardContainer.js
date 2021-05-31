import React, { useContext } from "react";
import ProfileCard from "./ProfileCard";
import "./styles/CardContainer.css";
import { Context } from "../contexts/ContextProvider";
const ProfileCardContainer = () => {
    const { profiles } = useContext(Context);
    return (
        <div className="card-container">
            {profiles &&
                profiles.map((profile) => {
                    return <ProfileCard key={profile.id} {...profile} />;
                })}
        </div>
    );
};
export default ProfileCardContainer;
