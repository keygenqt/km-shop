import React, {createContext, useState} from "react";
import {useLocation, useNavigate, useNavigationType} from "react-router-dom";
import RouteCore from "../route/RouteCore";
import {GuestConf} from "../../conf/routing/GuestConf";
import {useLocalStorage} from "../hooks/LocalStorage";
import {ValueType} from "../route/ValueType";
import {ConstantStorage} from "../constants/ConstantStorage";
import {UserConf} from "../../conf/routing/UserConf";

export const NavigateContext = createContext({})

export default function NavigateContextProvider(props) {

    const isAuth = useLocalStorage(ConstantStorage.isAuth, ValueType.bool);

    let conf = isAuth ? UserConf : GuestConf

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