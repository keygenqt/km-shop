import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Stack} from "@mui/material";
import {ConstantImages, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";

export function SplashPage() {

    const isAuth = useLocalStorage(ConstantStorage.userEmail, ValueType.bool);
    const {route, routes} = useContext(NavigateContext)

    useEffect(() => {
        if (isAuth) {
            route.toRefreshState(routes.dashboard)
        } else {
            route.toRefreshState(routes.login)
        }
    }, [routes, isAuth, route])

    return (
        <Stack
            className={"splash"}
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <img src={ConstantImages.common.logo192} alt={'Logo'}/>
        </Stack>
    );
}

SplashPage.propTypes = {};