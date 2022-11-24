import * as React from 'react';
import {useContext} from 'react';
import {Stack} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie, NavigateContext} from "../../base";
import Typography from "@mui/material/Typography";

export function ErrorPage() {

    const {route} = useContext(NavigateContext)

    return (
        <Stack
            spacing={3}
            alignItems={'center'}
            sx={{
                position: 'relative',
                top: -50,
                textAlign: 'center'
            }}
        >
            <Lottie animationData={ConstantLottie.error} style={{
                width: 300,
                marginBottom: -40
            }}/>

            <Typography variant="h4">
                Page Not Found
            </Typography>

            <Typography variant="body1">
                We're sorry, the page you requested could not be found
            </Typography>
        </Stack>
    );
}

ErrorPage.propTypes = {};