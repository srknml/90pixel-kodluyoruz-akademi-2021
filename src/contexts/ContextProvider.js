import { createContext, useState } from "react";
import { dbMethods } from "../database/databaseMethods";
import axios from "axios";

const ContextProvider = (props) => {
    const [profile, setProfile] = useState({});
    const [profiles, setProfiles] = useState([]);
    const [searchOptions, setSearchOptions] = useState([]);

    const getProfilesFromDB = async () => {
        const data = await dbMethods.get();
        return data;
    };

    const fetchProfileData = async (username) => {
        try {
            const url = `https://api.github.com/users/${username}`;
            const header = {
                authorization: `token ${process.env.REACT_APP_github_token}`,
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
                console.log(res);
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
                profile,
                setProfile,
                profiles,
                setProfiles,
                searchOptions,
                setSearchOptions,
                getProfilesFromDB,
                searchUsernames,
                fetchProfileData,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
export const Context = createContext();
