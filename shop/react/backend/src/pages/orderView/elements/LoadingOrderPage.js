import * as React from 'react';
import {Box, Container, Stack} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base";

export function LoadingOrderPage() {

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
                <Stack alignItems={"center"} spacing={1}>
                    <Box sx={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        p: 3
                    }}>
                        <Lottie animationData={ConstantLottie.orderLoading} style={{
                            width: 300,
                        }}/>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
}

LoadingOrderPage.propTypes = {};