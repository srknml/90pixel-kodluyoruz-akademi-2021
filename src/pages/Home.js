import React, { useContext } from "react";
import JoinForm from "../components/JoinForm";
import Hero from "../components/Hero/Hero";
import { Context } from "../contexts/ContextProvider";

function Home() {
    const { currentUser } = useContext(Context);

    return (
        <>
            <Hero />
            {currentUser ? "" : <JoinForm />}
        </>
    );
}

export default Home;
