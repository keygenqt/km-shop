import {Route} from "react-router-dom";
import * as React from "react";
import {BaseLayout} from "../components";
import {CartPage, ContactPage, ExploringPage, HomePage, ProductPage} from "../pages";
import {ValueType as RouteType} from "../base/route/ValueType";

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
        exploring: {
            path: '/exploring',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <ExploringPage/>
                    }
                />
            }
        },
        exploringCollection: {
            path: '/exploring/:filter',
            match: {
                id: RouteType.string,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <ExploringPage/>
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
                        <BaseLayout size={'xl'}>
                            <HomePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        product: {
            path: '/product/:id',
            match: {
                id: RouteType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <ProductPage/>
                    }
                />
            }
        },
    },
}