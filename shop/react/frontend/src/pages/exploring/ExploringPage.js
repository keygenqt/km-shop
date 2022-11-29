import * as React from 'react';
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {ConstantLottie, ConstantStorage, HttpClient, useEffectTimout, useLocalStorage} from "../../base";
import {SnackbarAddToCart} from "../../components/alerts/SnackbarAddToCart";
import {ValueType} from "../../base/route/ValueType";
import {FiltersBlock} from "./elements/FiltersBlock";
import {ProductsBlock} from "./elements/ProductsBlock";
import {BaseLayout} from "../../components";
import Lottie from "lottie-react";

export function ExploringPage() {

    let {filter} = useParams();

    const categoriesCache = useLocalStorage(ConstantStorage.categories, ValueType.array, []);
    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const category = filter ? categoriesCache.find((it) => it.key === filter)?.name : null
    const collection = filter ? collectionsCache.find((it) => it.key === filter)?.name : null

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState(null);

    useEffectTimout('ExploringPage', async () => {
        try {
            await new Promise(r => setTimeout(r, 1000));
            const response = await HttpClient.get.productsPublished()
            setProducts(response.toArray().mapToProducts())
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }, [], () => {
        setError(null)
        setLoading(true)
    })

    return (
        (error ? (
            <BaseLayout middle>
                <Box sx={{
                    width: 192,
                    height: 192,
                    margin: 'auto'
                }}>
                    <Lottie animationData={ConstantLottie.error500} style={{
                        width: '278px',
                        position: 'relative',
                        top: -57,
                        left: -33
                    }}/>
                </Box>
            </BaseLayout>
        ) : (
            <BaseLayout>
                <>
                    <SnackbarAddToCart/>
                    <Stack spacing={isSM ? 4 : 6}>

                        <Stack spacing={2}>
                            <Typography variant={isSM ? 'h4' : 'h3'}>
                                {filter ? (
                                    category ? `${category} category` : `${collection} category`
                                ) : (
                                    'Exploring'
                                )}
                            </Typography>

                            <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                                fontWeight: 100
                            }}>
                                Here you can choose your style for every day.
                            </Typography>
                        </Stack>

                        <Stack
                            direction={isSM ? 'column' : 'row'}
                            spacing={isSM ? (products && products.length ? 2 : 6) : 3}
                        >
                            <FiltersBlock/>

                            <ProductsBlock
                                loading={loading}
                                rows={products}
                            />
                        </Stack>
                    </Stack>
                </>
            </BaseLayout>
        ))
    );
}

ExploringPage.propTypes = {};