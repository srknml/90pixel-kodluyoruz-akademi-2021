import { createContext, useState, useEffect } from "react";
import { dbMethods } from "../firebase/DatabaseMethods";
import { authMethods } from "../firebase/AuthMethods";
import axios from "axios";

const ContextProvider = (props) => {
    const [profile, setProfile] = useState({});
    const [profiles, setProfiles] = useState([]);
    const [searchOptions, setSearchOptions] = useState([]);
    const [isAuthed, setIsAuthed] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        dbMethods.create(profile);
        getProfilesFromDB().then((dataDB) => setProfiles(dataDB));
    }, [profile]);

    const getProfilesFromDB = async () => {
        const data = await dbMethods.get();
        return data;
    };
    const getProfileFromDB = (id) => {
        const user = dbMethods.getSingleProfile(id).then((res) => {
            return res;
        });
        return user;
    };

    //Popup auth
    const popupSign = () => {
        authMethods.signPopup().then((res) => {
            if (res) {
                console.log(res);
                setIsAuthed(true);
                setToken(res.token);
                // setProfile(res.user)
            }
        });
    };
    // Redirect Sign
    const redirectSign = () => {
        authMethods.sign();
    };

    // Redirect Auth Data
    const redirectData = async () => {
        let user = await authMethods.getUserInfo();
        if (user) {
            console.log(user);
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
            setToken(user.token);
            setIsAuthed(true);
        }
    };

    const fetchProfileData = async (username) => {
        try {
            const url = `https://api.github.com/users/${username}`;
            const header = {
                authorization: `token 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`,
            };
            const res = await axios.get(url, header);
            const profileData = {
                id: res.data.id.toString(),
                name: res.data.name,
                repos: res.data.public_repos,
                location: res.data.location,
                username: res.data.login,
                image: res.data.avatar_url,
                email: res.data.email,
                profilLink: res.data.html_url,
                reposLink: res.data.repos_url,
            };
            setProfile(profileData);
        } catch (err) {
            console.log(err);
            alert("Lütfen geçerli bir kullanıcı adı giriniz.");
        }
    };

    const searchUsernames = async (query) => {
        try {
            if (query !== undefined && query !== "") {
                const url = `https://api.github.com/search/users?q=${query}`;
                const header = {
                    authorization: `token ${process.env.REACT_APP_github_token}`,
                };
                const res = await axios.get(url, header);
                let arr = [];
                let length =
                    res.data.total_count < 10 ? res.data.total_count : 10;

                for (let i = 0; i < length; i++) {
                    arr.push(res.data.items[i]);
                }
                setSearchOptions(
                    arr.map((item) => {
                        return { username: item.login, id: item.id };
                    })
                );
            }
        } catch (err) {
            console.log(err);
            alert("Lütfen geçerli bir kullanıcı adı giriniz.");
        }
    };

    return (
        <Context.Provider
            value={{
                popupSign,
                redirectSign,
                isAuthed,
                setIsAuthed,
                profile,
                setProfile,
                profiles,
                setProfiles,
                searchOptions,
                setSearchOptions,
                getProfilesFromDB,
                searchUsernames,
                fetchProfileData,
                getProfileFromDB,
                token,
                setToken,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
export const Context = createContext();
