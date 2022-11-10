import {Route} from "react-router-dom";
import * as React from "react";
import {SignInPage} from "../../../pages";

export const GuestConf = {
    delay: 200,
    routes: {
        login: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <SignInPage/>
                    }
                />
            }
        },
    },
}