import {Route} from "react-router-dom";
import * as React from "react";
import {DashboardPage} from "../../../pages";

export const UserConf = {
    delay: 200,
    routes: {
        dashboard: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <DashboardPage/>
                    }
                />
            }
        },
    },
}