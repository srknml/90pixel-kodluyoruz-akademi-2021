import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import Layout from "./Layout";
import { Context } from "../contexts/ContextProvider";
function ProtectedRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(Context);
    let history = useHistory();
    return (
        <Route
            {...rest}
            render={(rProps) => {
                if (currentUser) {
                    return (
                        <Layout>
                            <Component {...rProps} />
                        </Layout>
                    );
                } else {
                    history.push("/notfound");
                }
            }}
        />
    );
}

export default ProtectedRoute;
