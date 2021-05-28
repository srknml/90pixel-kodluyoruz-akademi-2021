/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect,useState, useContext } from "react";
import { Context } from "./contexts/ContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./config/Router";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
    const { fetchProfileData, getProfilesFromDB, setProfiles } =
        useContext(Context);


    /**
     * Unnecessary fetch to update
     */
    // useEffect(() => {
    //     document.title = "90Pixel-Kodluyoruz Akademi";
    //     getProfilesFromDB().then((data) => {
    //         data.map((profile) => {
    //             fetchProfileData(profile.username);
    //         });
    //         setProfiles(data);
    //     });
    // }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    {routes.map((route, i) =>
                        route.isAuthNeeded ? (
                            <ProtectedRoute
                                key={i}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                            />
                        ) : (
                            <Route
                                key={i}
                                exact={route.exact}
                                path={route.path}
                            >
                                <Layout>{route.component}</Layout>
                            </Route>
                        )
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
