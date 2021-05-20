import "./App.css";
import { useState, useEffect } from "react";
import ProfileCardContainer from "./components/ProfileCardContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinForm from "./components/JoinForm";
import axios from "axios";
import { dbMethods } from "./database/databaseMethods";

function App() {
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        document.title = "90Pixel-Kodluyoruz Akademi";
        //Updates DB at first render
        getProfilesFromDB().then((data) => {

            // eslint-disable-next-line array-callback-return
            data.map((profile) => {
                fetchProfileData(profile.username)
              
            })
            setProfiles(data);
        });
    }, []);

    // Run when profile changed
    useEffect(() => {
        dbMethods.create(profile);
        getProfilesFromDB().then((dataDB) => setProfiles(dataDB));
    }, [profile]);

    async function getProfilesFromDB() {
        const data = await dbMethods.get();
        return data;
    }

    function fetchProfileData(username) {
        const url = `https://api.github.com/users/${username}`;
        axios
            .get(url)
            .then((res) => {
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
            })
            .catch((err) => {
                console.log(err);
                alert("Lütfen geçerli bir kullanıcı adı giriniz.");
            });
    }
    return (
        <div className="App">
            <Header />
            <Hero />
            <JoinForm fetchProfileData={fetchProfileData} />
            <ProfileCardContainer profiles={profiles} />
        </div>
    );
}

export default App;
