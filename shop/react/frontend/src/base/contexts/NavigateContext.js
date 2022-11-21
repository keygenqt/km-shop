import React, {createContext, useState} from "react";
import {useLocation, useNavigate, useNavigationType} from "react-router-dom";
import RouteCore from "../route/RouteCore";
import {RouteConf} from "../../conf/RouteConf";

export const NavigateContext = createContext({})

export default function NavigateContextProvider(props) {

    let conf = RouteConf

    const location = useLocation()
    const navigate = useNavigate()
    const type = useNavigationType()

    const [route] = useState(new RouteCore(conf, location, navigate, type));

    route.update(conf, location, navigate, type)

    return (
        <NavigateContext.Provider
            value={{
                route,
                routes: conf.routes
            }}>
            {props.children}
        </NavigateContext.Provider>
    )
}