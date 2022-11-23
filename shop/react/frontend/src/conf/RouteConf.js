import {Route} from "react-router-dom";
import * as React from "react";
import {BaseLayout} from "../components";
import {CartPage, CategoriesPage, ContactPage, HomePage, ProductPage} from "../pages";

export const RouteConf = {
    delay: 300,
    routes: {
        cart: {
            path: '/cart',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <CartPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        categories: {
            path: '/categories',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <CategoriesPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        contact: {
            path: '/contact',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <ContactPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        home: {
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
        product: {
            path: '/product',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <ProductPage/>
                        </BaseLayout>
                    }
                />
            }
        },
    },
}