import {Route} from "react-router-dom";
import * as React from "react";
import {
    CategoriesPage,
    DashboardPage,
    FiltersOrders,
    HelpPage,
    ManagersPage,
    OrdersPage,
    ProductsPage,
    SystemPage,
    UploadsPage
} from "../../pages";
import {AppMenu, AppToolbar, Layout} from "../../components";
import {MenuConf} from "../menu/MenuConf";

function CommonLayout(props) {
    return (
        <Layout
            menu={<AppMenu configuration={MenuConf}/>}
            toolbar={<AppToolbar/>}
        >
            {props.children}
        </Layout>
    );
}

export const UserConf = {
    delay: 300,
    routes: {
        categories: {
            path: '/categories',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <CategoriesPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        dashboard: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <DashboardPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        help: {
            path: '/help-desk',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <HelpPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        managers: {
            path: '/managers',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <ManagersPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        ordersNew: {
            path: '/orders',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <OrdersPage filter={FiltersOrders.filterNew}/>
                        </CommonLayout>
                    }
                />
            }
        },
        ordersPending: {
            path: '/orders/pending',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <OrdersPage filter={FiltersOrders.filterPending}/>
                        </CommonLayout>
                    }
                />
            }
        },
        ordersCompleted: {
            path: '/orders/completed',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <OrdersPage filter={FiltersOrders.filterCompleted}/>
                        </CommonLayout>
                    }
                />
            }
        },
        products: {
            path: '/products',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <ProductsPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        system: {
            path: '/system',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <SystemPage/>
                        </CommonLayout>
                    }
                />
            }
        },
        uploads: {
            path: '/uploads',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <CommonLayout>
                            <UploadsPage/>
                        </CommonLayout>
                    }
                />
            }
        },
    },
}