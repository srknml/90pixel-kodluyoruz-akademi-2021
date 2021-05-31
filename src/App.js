import "./App.css";
import { useEffect, useContext } from "react";
import { Context } from "./contexts/ContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./config/Router";
import { authMethods } from "./firebase/AuthMethods";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
    const { setCurrentUser, getProfilesFromDB } = useContext(Context);

    useEffect(() => {
        getProfilesFromDB();
    }, [getProfilesFromDB]);

    //Checks user Authed
    useEffect(() => {
        authMethods.isSignedUser(setCurrentUser);
    }, [setCurrentUser]);

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
