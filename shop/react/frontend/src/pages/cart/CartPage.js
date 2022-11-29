import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {ConstantLottie, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import Lottie from "lottie-react";
import {CartForm} from "./elements/CartForm";
import {CartProducts} from "./elements/CartProducts";

export function CartPage() {

    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);
    const {route, routes} = useContext(NavigateContext)

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [refresh])

    if (cartProducts.length === 0) {
        return (
            <Stack spacing={isSM ? 4 : 6}>

                <Stack spacing={2}>
                    <Typography variant={isSM ? 'h4' : 'h3'}>
                        Shopping Cart
                    </Typography>
                    <Typography variant={'h5'} sx={{
                        fontWeight: 100,
                        maxWidth: 500
                    }}>
                        Your shopping cart is empty, add the products you are interested in and return.
                    </Typography>
                </Stack>

                <Lottie animationData={ConstantLottie.cartEmpty} style={{
                    width: 100,
                    marginBottom: -20,
                    marginTop: 20
                }}/>

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
                        Exploring
                    </Button>
                </Box>
            </Stack>
        )
    }

    return (
        <Stack spacing={isSM ? 4 : 6}>

            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Shopping Cart
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Here you can place an order.
                </Typography>
            </Stack>

            <Box sx={{position: 'relative'}}>

                <Box sx={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    left: -10,
                    top: 172,
                    zIndex: 1
                }}/>

                <Box sx={{
                    position: 'absolute',
                    width: 80,
                    height: 20,
                    backgroundColor: 'success.main',
                    borderRadius: '6px',
                    top: -7,
                    left: 30
                }}/>

                <Grid container spacing={isMD ? 6 : 3}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12} min={12} null={12}>
                        <CartProducts
                            disabled={submit}
                            loading={loading}
                            rows={cartProducts}
                            onRefresh={() => setRefresh(!refresh)}
                        />
                    </Grid>
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} min={12} null={12}>
                        <Stack spacing={isMD ? 2 : 3} sx={{
                            top: 32,
                            position: 'sticky',
                            marginBottom: -2
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                width: 50,
                                height: 50,
                                backgroundColor: '#F09372',
                                borderRadius: '50%',
                                top: -20,
                                right: 40
                            }}/>

                            <CartForm
                                loading={loading}
                                onSubmit={(state) => setSubmit(state)}
                            />

                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}

CartPage.propTypes = {};