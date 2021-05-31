import React, { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
function ProfileSettings() {
    const { currentUser } = useContext(Context);
    return (
        <div>
            <h1>Profile Settings</h1>
            {currentUser.login}
        </div>
    );
}

export default ProfileSettings;
