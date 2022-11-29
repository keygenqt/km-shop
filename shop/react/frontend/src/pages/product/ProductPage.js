import * as React from 'react';
import {Box, Divider, Stack, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {ErrorPage} from "../error/ErrorPage";
import {BaseLayout} from "../../components";
import {SnackbarAddToCart} from "../../components/alerts/SnackbarAddToCart";
import {ProductViewPage} from "./elements/ProductViewPage";
import {ProductsPurchasedPage} from "./elements/ProductsPurchasedPage";
import Lottie from "lottie-react";
import {ConstantLottie, HttpClient, useEffectTimout} from "../../base";

export function ProductPage() {

    let {id} = useParams();

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [product, setProduct] = React.useState(null);
    const [purchased, setPurchased] = React.useState([]);

    useEffectTimout(async () => {
        try {
            await new Promise(r => setTimeout(r, 1000));

            const responseProduct = await HttpClient.get
                .product(id)

            const responseProducts = await HttpClient.get
                .productsPublished()

            setProduct(responseProduct.mapToProduct())

            setPurchased(responseProducts.toArray()
                .filter((it) => it.id !== parseInt(id))
                .mapToProducts()
                .reverse()
                .slice(0, 4)
            )

            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }, [id], () => {
        setError(null)
        setLoading(true)
    })

    return (
        loading || error ? (
            <BaseLayout middle>
                {error ? (
                    <ErrorPage/>
                ) : (
                    <Box sx={{
                        width: 'fit-content',
                        backgroundColor: '#F6F7F9',
                        borderRadius: '50%',
                        p: 1.5,
                        margin: 'auto'
                    }}>
                        <Box sx={{
                            width: 260,
                            height: 260,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                        }}>
                            <Lottie animationData={ConstantLottie.catPlaying} style={{
                                width: '290px',
                                position: 'relative',
                                top: 70
                            }}/>
                        </Box>
                    </Box>
                )}
            </BaseLayout>
        ) : (
            <BaseLayout>
                <>
                    <SnackbarAddToCart/>
                    <Stack spacing={isSM ? 4 : 6}>
                        <ProductViewPage product={product}/>
                        <Divider flexItem/>
                        <ProductsPurchasedPage rows={purchased}/>
                    </Stack>
                </>
            </BaseLayout>
        )
    );
}

ProductPage.propTypes = {};