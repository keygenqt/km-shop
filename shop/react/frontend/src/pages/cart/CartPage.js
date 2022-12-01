import * as React from 'react';
import {useState} from 'react';
import {Box, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AppCache, ConstantStorage, HttpClient, useEffectTimout, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import {CartForm} from "./elements/CartForm";
import {CartProducts} from "./elements/CartProducts";
import {BaseLayout} from "../../components";
import {ErrorCart} from "./elements/ErrorCart";
import {EmptyCart} from "./elements/EmptyCart";
import {SuccessCart} from "./elements/SuccessCart";

export function CartPage() {

    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [orderNumber, setOrderNumber] = useState(null);
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [error, setError] = useState(null);

    useEffectTimout('CartPage', async () => {
        try {
            const response = await HttpClient.get.productsPublishedByIDs(
                cartProducts.map((it) => it.id)
            )
            AppCache.arraySet(ConstantStorage.cart, response.toArray().mapToProducts().map((it) => {
                return {
                    ...it,
                    count: cartProducts.find((cp) => cp.id === it.id).count
                }
            }))
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }, [refresh], () => {
        setError(null)
        setLoading(true)
    })

    // pages state
    if (orderNumber) return (
        <BaseLayout middle>
            <SuccessCart number={orderNumber}/>
        </BaseLayout>
    )
    if (error) return <ErrorCart/>
    if (cartProducts.length === 0) return <EmptyCart/>

    return (
        <BaseLayout>

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
                                    products={cartProducts}
                                    loading={loading}
                                    onSubmit={(state) => setSubmit(state)}
                                    onSuccess={(number) => {
                                        setOrderNumber(number)
                                        AppCache.clearByKey(ConstantStorage.cart)
                                    }}
                                />

                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </BaseLayout>
    );
}

CartPage.propTypes = {};