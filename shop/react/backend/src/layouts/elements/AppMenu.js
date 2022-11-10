import * as React from 'react';
import {useContext} from 'react';
import {Button, Stack} from "@mui/material";
import {NavigateContext} from "../../base";

export function AppMenu() {

    const {route, routes} = useContext(NavigateContext)

    return (
        <Stack spacing={2}>
            <Button
                variant={'outlined'}
                onClick={() => {
                    route.toRefreshState(routes.dashboard)
                }}
            >
                Dashboard
            </Button>
            <Button
                variant={'outlined'}
                onClick={() => {
                    route.toRefreshState(routes.orders)
                }}
            >
                Orders
            </Button>
        </Stack>
    );
}

AppMenu.propTypes = {};