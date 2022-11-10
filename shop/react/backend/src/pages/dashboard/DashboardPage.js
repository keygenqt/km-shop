import * as React from 'react';
import {Stack} from "@mui/material";

export function DashboardPage() {
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
            Dashboard
        </Stack>
    );
}

DashboardPage.propTypes = {};