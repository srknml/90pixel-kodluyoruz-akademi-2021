import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/ContextProvider";
function ProfileDetail() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const { getProfileFromDB } = useContext(Context);
    useEffect(() => {
        getProfileFromDB(id).then((res) => {
            setUser(res);
        });
    }, [getProfileFromDB, id]);

    return (
        <>
            <h1>Profile Detail</h1>
            <h1> {user.name} </h1>
        </>
    );
}

export default ProfileDetail;
