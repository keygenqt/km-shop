import {Route} from "react-router-dom";
import * as React from "react";
import {
    CategoriesPage,
    DashboardPage,
    FiltersOrders,
    HelpPage,
    ManagersPage,
    ManagerUpdatePage,
    OrdersPage,
    ProductsPage,
    SystemPage,
    UploadsPage
} from "../../pages";
import {AppLayout} from "../../components";
import {ValueType as RouteType} from "../../base/route/ValueType";

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
                        <AppLayout>
                            <CategoriesPage/>
                        </AppLayout>
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
                        <AppLayout>
                            <DashboardPage/>
                        </AppLayout>
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
                        <AppLayout>
                            <HelpPage/>
                        </AppLayout>
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
                        <AppLayout>
                            <ManagersPage/>
                        </AppLayout>
                    }
                />
            }
        },
        managerCreate: {
            path: '/manager/add',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <ManagerUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
        managerEdit: {
            path: '/manager/:id',
            match: {
                id: RouteType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <ManagerUpdatePage/>
                        </AppLayout>
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
                        <AppLayout>
                            <OrdersPage filter={FiltersOrders.filterNew}/>
                        </AppLayout>
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
                        <AppLayout>
                            <OrdersPage filter={FiltersOrders.filterPending}/>
                        </AppLayout>
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
                        <AppLayout>
                            <OrdersPage filter={FiltersOrders.filterCompleted}/>
                        </AppLayout>
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
                        <AppLayout>
                            <ProductsPage/>
                        </AppLayout>
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
                        <AppLayout>
                            <SystemPage/>
                        </AppLayout>
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
                        <AppLayout>
                            <UploadsPage/>
                        </AppLayout>
                    }
                />
            }
        },
    },
}