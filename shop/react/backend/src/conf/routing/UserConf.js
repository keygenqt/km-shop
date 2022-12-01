import {Route} from "react-router-dom";
import * as React from "react";
import {
    CategoriesPage,
    CategoryUpdatePage, CollectionsPage,
    CollectionUpdatePage,
    DashboardPage,
    HelpPage,
    ManagersPage,
    ManagerUpdatePage,
    OrdersPage,
    OrderViewPage,
    ProductsPage,
    ProductUpdatePage,
} from "../../pages";
import {AppLayout} from "../../components";
import {ValueType as RouteType} from "../../base/route/ValueType";
import {BlockOutlined, NewReleasesOutlined, PendingActionsOutlined, VerifiedOutlined} from "@mui/icons-material";
import {OrderState} from "../../base";

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
        categoryCreate: {
            path: '/categories/add',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <CategoryUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
        categoryEdit: {
            path: '/categories/:id',
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
                            <CategoryUpdatePage/>
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
            path: '/managers/add',
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
            path: '/managers/:id',
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
            path: '/orders/new',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <OrdersPage
                                icon={NewReleasesOutlined}
                                filter={OrderState.NEW}
                            />
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
                            <OrdersPage
                                icon={PendingActionsOutlined}
                                filter={OrderState.PENDING}
                            />
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
                            <OrdersPage
                                icon={VerifiedOutlined}
                                filter={OrderState.COMPLETED}
                            />
                        </AppLayout>
                    }
                />
            }
        },
        ordersCanceled: {
            path: '/orders/canceled',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <OrdersPage
                                icon={BlockOutlined}
                                filter={OrderState.CANCELED}
                            />
                        </AppLayout>
                    }
                />
            }
        },
        orderNewView: {
            path: '/orders/new/:id',
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
                            <OrderViewPage
                                icon={NewReleasesOutlined}
                                filter={OrderState.NEW}
                            />
                        </AppLayout>
                    }
                />
            }
        },
        orderPendingView: {
            path: '/orders/pending/:id',
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
                            <OrderViewPage
                                icon={PendingActionsOutlined}
                                filter={OrderState.PENDING}
                            />
                        </AppLayout>
                    }
                />
            }
        },
        orderCompletedView: {
            path: '/orders/completed/:id',
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
                            <OrderViewPage
                                icon={VerifiedOutlined}
                                filter={OrderState.COMPLETED}
                            />
                        </AppLayout>
                    }
                />
            }
        },
        orderCanceledView: {
            path: '/orders/canceled/:id',
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
                            <OrderViewPage
                                icon={BlockOutlined}
                                filter={OrderState.CANCELED}
                            />
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
        productCreate: {
            path: '/products/add',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <ProductUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
        productEdit: {
            path: '/products/:id',
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
                            <ProductUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
        collections: {
            path: '/collections',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <CollectionsPage/>
                        </AppLayout>
                    }
                />
            }
        },
        collectionCreate: {
            path: '/collections/add',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <AppLayout>
                            <CollectionUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
        collectionEdit: {
            path: '/collections/:id',
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
                            <CollectionUpdatePage/>
                        </AppLayout>
                    }
                />
            }
        },
    },
}