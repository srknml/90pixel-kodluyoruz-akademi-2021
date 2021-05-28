import React, { useContext } from "react";
import JoinForm from "../components/JoinForm";
import Hero from "../components/Hero";
import { Context } from "../contexts/ContextProvider";

function Home() {
    const { isAuthed } = useContext(Context);
    return (
        <>
            <Hero />
            {isAuthed ? "" : <JoinForm />}
        </>
    );
}

export default Home;
