import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/ContextProvider";

import Qw from "../components/ProfileDetail/Qw"
function ProfileDetail() {
    const [user, setUser] = useState();
    const { id } = useParams();
    const { getProfileFromDB } = useContext(Context);

    useEffect(() => {
        getProfileFromDB(id).then((res) => {
            setUser(res);
        });
    }, [getProfileFromDB, id]);

    return (
        <>
            {user && (
                <>
                <Qw user = {user} ></Qw>
                </>
            )}
        </>
    );
}

export default ProfileDetail;
