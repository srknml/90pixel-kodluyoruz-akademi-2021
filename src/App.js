import "./App.css";
import { useState, useEffect } from "react";
import ProfileCardContainer from "./components/ProfileCardContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinForm from "./components/JoinForm";
import { dbMethods } from "./database/databaseMethods";

function App() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        document.title = "90Pixel-Kodluyoruz Akademi"
        fetchAndSetProfiles();
    }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchAndSetProfiles() {
        const data = await dbMethods.get();
        setProfiles(data);
    }
    return (
        <div className="App">
            <Header />
            <Hero/>
            <JoinForm fetchAndSetProfiles={fetchAndSetProfiles} />
            <ProfileCardContainer profiles={profiles} />
        </div>
    );
}

export default App;
