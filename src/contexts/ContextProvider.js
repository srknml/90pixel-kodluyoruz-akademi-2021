import { createContext, useState, useCallback } from "react";
import { dbMethods } from "../firebase/DatabaseMethods";
import { authMethods } from "../firebase/AuthMethods";

const ContextProvider = (props) => {
    const [profiles, setProfiles] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    const getProfilesFromDB = useCallback(() => {
        dbMethods.get("test").then((data) => {
            setProfiles(data);
        });
    }, []);
    const getProfileFromDB = async (id) => {
        const res = await dbMethods.getSingleProfile(id);
        return res;
    };

    //Popup auth
    const popupSign = () => {
        authMethods.signPopup().then(() => {
            authMethods.isSignedUser(setCurrentUser);
        });
    };

    const handleSignout = () => {
        authMethods.signOut();
        setCurrentUser(false);
    };

    return (
        <Context.Provider
            value={{
                getProfilesFromDB,
                setCurrentUser,
                currentUser,
                handleSignout,
                popupSign,
                profiles,
                getProfileFromDB,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
export const Context = createContext();
