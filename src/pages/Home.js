import React, { useContext } from "react";
import Join from "../components/Join/Join";
import Hero from "../components/Hero/Hero";
import { Context } from "../contexts/ContextProvider";

function Home() {
    const { currentUser } = useContext(Context);

    return (
        <>
            <Hero heroText="90Pixel & Kodluyoruz Akademi React Bootcamp" />
            {currentUser ? "" : <Join />}
            
        </>
    );
}

export default Home;
