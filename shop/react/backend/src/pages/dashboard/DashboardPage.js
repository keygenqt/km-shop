import * as React from 'react';
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect} from "react";
import {ConstantKMM} from "../../base";

export function DashboardPage() {

    useEffect(() => {

        ConstantKMM.request.get.rocketsDemoAPI().then(async (response) => {


        }).catch(async (response) => {
            console.log(response)
            console.log(response.code)
            console.log(response.message)
        });


    }, [])


    return (
        <Stack>
            <Typography variant="h2">
                Dashboard
            </Typography>
        </Stack>
    );
}

DashboardPage.propTypes = {};