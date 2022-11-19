import * as React from 'react';
import {useContext} from 'react';
import {Box, Button, Container, Stack} from "@mui/material";
import Lottie from "lottie-react";
import {ArrowBackOutlined} from "@mui/icons-material";
import {ConstantLottie, NavigateContext} from "../../base";

export function NotFoundPage() {

    const {route} = useContext(NavigateContext)

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Container maxWidth={"sm"} className={'content'}>
                <Stack alignItems={"center"} spacing={3}>

                    <Box sx={{
                        position: 'relative',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        p: 3
                    }}>
                        <Lottie animationData={ConstantLottie.error} style={{
                            width: 300,
                        }}/>

                        <Box sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: -8,
                            textAlign: 'center'
                        }}>
                            <Button size={'medium'} variant="contained" startIcon={<ArrowBackOutlined/>} sx={{
                                '& .MuiButton-startIcon': {
                                    paddingBottom: '1px'
                                }
                            }} onClick={() => {
                                route.toBack()
                            }}>
                                To Back
                            </Button>
                        </Box>

                    </Box>

                </Stack>
            </Container>
        </Stack>
    );
}

NotFoundPage.propTypes = {};