import React,{useContext} from "react";
import ProfileCard from "./ProfileCard";
import "./styles/CardContainer.css"
import {Context} from "../contexts/ContextProvider"
export default function ProfileCardContainer() {

    const {profiles} = useContext (Context)

    return (
        <div className = "card-container">
            {profiles &&
                profiles.map((profile) => {
                    return  <ProfileCard key={profile.id} {...profile} />;
                })}
        </div>
    );
}
