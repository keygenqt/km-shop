import * as React from "react";
import {useContext} from "react";
import {BaseLayout} from "../../../components";
import {Box, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie, NavigateContext} from "../../../base";
import {SearchOutlined} from "@mui/icons-material";

export function EmptyCart() {

    const {route, routes} = useContext(NavigateContext)

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BaseLayout middle>
            <Stack spacing={4} sx={{textAlign: 'center'}}>

                <Stack spacing={2}>
                    <Typography variant={isSM ? 'h4' : 'h3'}>
                        Пусто
                    </Typography>

                    <Typography variant={'h5'} sx={{
                        fontWeight: 100,
                        maxWidth: 500,
                        marginLeft: 'auto !important',
                        marginRight: 'auto !important'
                    }}>
                        Ваша корзина пуста, добавьте интересующие вас товары и вернитесь.
                    </Typography>
                </Stack>

                <Box sx={{
                    height: 180,
                    width: 180,
                    overflow: 'hidden',
                    marginLeft: 'auto !important',
                    marginRight: 'auto !important'
                }}>
                    <Lottie animationData={ConstantLottie.cartEmpty} style={{
                        width: 180,
                    }}/>
                </Box>

                <Box>
                    <Button
                        variant={'outlined'}
                        color={'secondary'}
                        size={'large'}
                        endIcon={isSM ? null : <SearchOutlined/>}
                        onClick={() => {
                            route.toLocation(routes.exploring)
                        }}
                    >
                        Исследовать
                    </Button>
                </Box>

            </Stack>
        </BaseLayout>
    )
}

EmptyCart.propTypes = {};