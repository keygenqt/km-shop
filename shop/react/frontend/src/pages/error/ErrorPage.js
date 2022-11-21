import * as React from 'react';
import {useContext} from 'react';
import {Button, Container, Stack} from "@mui/material";
import Lottie from "lottie-react";
import {Cached} from "@mui/icons-material";
import {ConstantLottie, NavigateContext} from "../../base";

export function ErrorPage() {

    const {route} = useContext(NavigateContext)

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
            <Container maxWidth={"sm"} className={'content'}>
                <Stack alignItems={"center"} spacing={1}>
                    <Lottie animationData={ConstantLottie.error} style={{
                        width: 300,
                    }}/>

                    <Button size={'medium'} variant="outlined" startIcon={<Cached/>} sx={{
                        '& .MuiButton-startIcon': {
                            paddingBottom: '1px'
                        }
                    }} onClick={() => {
                        route.openUrl("/")
                    }}>
                        Reload
                    </Button>

                </Stack>
            </Container>
        </Stack>
    );
}

ErrorPage.propTypes = {};