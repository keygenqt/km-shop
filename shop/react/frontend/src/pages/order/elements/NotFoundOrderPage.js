import * as React from 'react';
import {Box, Button, Stack} from "@mui/material";
import Lottie from "lottie-react";
import Typography from "@mui/material/Typography";
import {ConstantLottie, NavigateContext} from "../../../base";
import {SearchOutlined} from "@mui/icons-material";
import {useContext} from "react";

export function NotFoundOrderPage() {

    const {route, routes} = useContext(NavigateContext)

    return (
        <Stack spacing={4} alignItems={'center'}>
            <Stack
                spacing={3}
                alignItems={'center'}
            >
                <Box sx={{
                    width: 300,
                    height: 250,
                }}>
                    <Lottie loop={false} animationData={ConstantLottie.orderSearchEmpty} style={{
                        width: 300,
                        position: 'relative',
                        top: -50
                    }}/>
                </Box>

                <Typography variant="h4">
                    Order Not Found
                </Typography>

                <Typography variant="body1" sx={{textAlign: 'center'}}>
                    We're sorry, the page you requested could not be found
                </Typography>
            </Stack>

            <Box>
                <Button
                    variant={'outlined'}
                    color={'secondary'}
                    size={'large'}
                    startIcon={<SearchOutlined/>}
                    onClick={() => {
                        route.toLocation(routes.orderSearch)
                    }}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

NotFoundOrderPage.propTypes = {};