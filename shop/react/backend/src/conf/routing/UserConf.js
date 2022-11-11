import {Route} from "react-router-dom";
import * as React from "react";
import {DashboardPage, OrdersPage} from "../../pages";
import {AppMenu, AppToolbar, Layout} from "../../components";
import {MenuConf} from "../menu/MenuConf";

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
                        <Layout
                            menu={<AppMenu configuration={MenuConf}/>}
                            toolbar={<AppToolbar/>}
                        >
                            <DashboardPage/>
                        </Layout>
                    }
                />
            }
        },
        orders: {
            path: '/orders',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <Layout
                            menu={<AppMenu configuration={MenuConf}/>}
                            toolbar={<AppToolbar/>}
                        >
                            <OrdersPage/>
                        </Layout>
                    }
                />
            }
        },
    },
}