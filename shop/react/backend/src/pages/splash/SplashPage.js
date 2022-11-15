import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Stack} from "@mui/material";
import {ConstantImages, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";

export function SplashPage() {

    const userAuth = useLocalStorage(ConstantStorage.userAuth, ValueType.object);
    const {route, routes} = useContext(NavigateContext)

    useEffect(() => {
        if (userAuth) {
            route.toRefreshState(routes.dashboard)
        } else {
            route.toRefreshState(routes.login)
        }
    }, [routes, userAuth, route])

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