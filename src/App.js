import "./App.css";
import { useEffect, useContext } from "react";
import ProfileCardContainer from "./components/ProfileCardContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinForm from "./components/JoinForm";
import { Context } from "./contexts/ContextProvider";
import { dbMethods } from "./database/databaseMethods";

function App() {
    const { fetchProfileData, getProfilesFromDB, profile, setProfiles } = useContext(Context);
    useEffect(() => {
        document.title = "90Pixel-Kodluyoruz Akademi";
        //Updates DB at first render
        getProfilesFromDB().then((data) => {
            // eslint-disable-next-line array-callback-return
            data.map((profile) => {
                fetchProfileData(profile.username);
            });
            setProfiles(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Run when profile changed
    useEffect(() => {
        dbMethods.create(profile);
        getProfilesFromDB().then((dataDB) => setProfiles(dataDB));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile]);

    return (
        <div className="App">
            <Header />
            <Hero />
            <JoinForm />
            <ProfileCardContainer />
        </div>
    );
}

export default App;
