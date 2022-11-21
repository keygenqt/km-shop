import {Route} from "react-router-dom";
import * as React from "react";
import {BaseLayout} from "../components";
import {HomePage} from "../pages";

export const RouteConf = {
    delay: 300,
    routes: {
        categories: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <HomePage/>
                        </BaseLayout>
                    }
                />
            }
        },
    },
}