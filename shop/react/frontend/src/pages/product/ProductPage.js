import * as React from 'react';
import {Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {ConstantProducts} from "../../base/constants/ConstantProducts";
import {ErrorPage} from "../error/ErrorPage";
import {BaseLayout} from "../../components";
import {
    AddCircleOutline,
    AddShoppingCartOutlined,
    CurrencyExchangeOutlined,
    LanguageOutlined,
    LocalShippingOutlined,
    RemoveCircleOutline,
    Star,
    WifiProtectedSetupOutlined
} from "@mui/icons-material";
import {AppCache, ConstantStorage, useLocalStorage} from "../../base";
import {CardProduct} from "../../components/other/CardProduct";
import {SnackbarAddToCart} from "../../components/alerts/SnackbarAddToCart";
import {ValueType} from "../../base/route/ValueType";

export function ProductPage() {

    let {id} = useParams();
    const theme = useTheme()
    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const product = ConstantProducts
        .find((it) => it.id === parseInt(id))

    const collections = []
    const purchased = []

    product.collections.forEach((collection, index) => {
        collections.push((
            <Chip
                key={`collections-item-${index}`}
                size={'small'}
                label={collection}
                variant={'outlined'}
                color={'secondary'}
            />
        ));
    })

    ConstantProducts.slice(0, isLG ? isMD ? 2 : 3 : 4).forEach((product, index) => {
        purchased.push((
            <Grid key={`exploring-product-item-${index}`} item xl={3} lg={3} md={4} sm={6} xs={12} min={12} null={12}>
                <CardProduct product={product}/>
            </Grid>
        ))
    })

    return (
        product ? (
            <BaseLayout>
                <>
                    <SnackbarAddToCart/>
                    <Stack spacing={isSM ? 4 : 6}>

                        <Grid container spacing={isSM ? 3 : 4}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>

                                <Grid container spacing={isSM ? 2 : 3}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} min={12} null={12}>
                                        <Avatar
                                            variant={'rounded'}
                                            src={product.image}
                                            sx={{
                                                width: '100%',
                                                height: 350,
                                                borderRadius: 2
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} min={12} null={12}>
                                        <Avatar
                                            variant={'rounded'}
                                            src={product.image}
                                            sx={{
                                                width: '100%',
                                                height: 180,
                                                borderRadius: 2
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} min={12} null={12}>
                                        <Avatar
                                            variant={'rounded'}
                                            src={product.image}
                                            sx={{
                                                width: '100%',
                                                height: 180,
                                                borderRadius: 2
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>

                                <Stack spacing={3}>
                                    <Box sx={{
                                        backgroundColor: '#F6F7F9',
                                        p: isMD ? 2 : 3,
                                        borderRadius: 2,
                                    }}>
                                        <Stack spacing={3} sx={{backgroundColor: 'white', borderRadius: 2, p: 2}}>

                                            <Typography variant={isSM ? 'h4' : 'h3'}>
                                                {product.title}
                                            </Typography>

                                            <Stack spacing={2} direction={'row'}>
                                                <Chip
                                                    size={'medium'}
                                                    label={product.price}
                                                    variant={'outlined'}
                                                    color={'success'}
                                                    sx={{
                                                        marginTop: '1px',
                                                        minWidth: 100,
                                                        borderWidth: 2,
                                                        fontWeight: 400,
                                                        fontSize: 14
                                                    }}
                                                />

                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                />

                                                <Stack direction={'row'} spacing={0.7} alignItems={'center'}>
                                                    <Star sx={{width: 18, height: 18, color: '#FBBF23'}}/>
                                                    <Typography variant="body2">
                                                        4.0
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <Stack direction={isMD ? 'column' : 'row'} spacing={2}>
                                                <Stack
                                                    spacing={0}
                                                    direction={'row'}
                                                    alignItems={'center'}
                                                    sx={{
                                                        pl: 1,
                                                        pr: 1,
                                                        borderRadius: 3,
                                                        userSelect: 'none',
                                                        backgroundColor: '#F6F7F9',
                                                        width: 'fit-content',
                                                        '& .MuiButtonBase-root': {
                                                            p: 0.5,
                                                            minWidth: 0,
                                                            borderRadius: '50%'
                                                        }
                                                    }}
                                                >
                                                    <Button
                                                        color={'warning'}
                                                        onClick={() => {

                                                        }}
                                                    >
                                                        <RemoveCircleOutline sx={{width: 32, height: 32}}/>
                                                    </Button>

                                                    <Typography variant={'h6'} sx={{
                                                        fontSize: 18,
                                                        paddingY: 0.5,
                                                        paddingX: 1
                                                    }}>
                                                        12
                                                    </Typography>

                                                    <Button
                                                        color={'warning'}
                                                        onClick={() => {

                                                        }}
                                                    >
                                                        <AddCircleOutline sx={{width: 32, height: 32}}/>
                                                    </Button>
                                                </Stack>

                                                <Box sx={{width: '100%'}}>
                                                    <Button
                                                        fullWidth
                                                        disableElevation
                                                        variant={'contained'}
                                                        color={'black'}
                                                        startIcon={<AddShoppingCartOutlined/>}
                                                        sx={{
                                                            color: 'white',
                                                            paddingY: 2,
                                                            paddingX: 4,
                                                        }}
                                                        onClick={() => {
                                                            console.log('Add to cart')
                                                        }}
                                                    >
                                                        <Typography variant="h5">
                                                            Add to cart
                                                        </Typography>
                                                    </Button>
                                                </Box>
                                            </Stack>

                                            <Stack spacing={2}>

                                                {collections.length > 0 ? (
                                                    <>
                                                        <Divider flexItem/>

                                                        <Box sx={{
                                                            position: 'relative',
                                                            left: -8,
                                                            '& .MuiChip-root': {
                                                                marginLeft: 1,
                                                                mt: 0.3,
                                                                mb: 0.3,
                                                            },
                                                        }}>
                                                            {collections}
                                                        </Box>
                                                    </>
                                                ) : null}

                                                <Divider flexItem/>

                                                <Typography variant={isSM ? 'h6' : 'h5'}>
                                                    Description
                                                </Typography>

                                                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                                                    fontWeight: 100,
                                                }}>
                                                    {product.desc}
                                                </Typography>
                                            </Stack>

                                        </Stack>
                                    </Box>

                                    <Box>
                                        <Grid container spacing={isMD ? 1 : 3}>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                                <Box sx={{
                                                    backgroundColor: '#E3F2FD',
                                                    p: 3,
                                                    borderRadius: 2,
                                                }}>
                                                    <Stack spacing={1}>
                                                        <LocalShippingOutlined/>

                                                        <Stack spacing={0.5}>
                                                            <Typography variant={'h6'}>
                                                                Free shipping
                                                            </Typography>
                                                            <Typography variant={'caption'}>
                                                                On orders over $50.00
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                                <Box sx={{
                                                    backgroundColor: '#eaf7f2',
                                                    p: 3,
                                                    borderRadius: 2,
                                                }}>
                                                    <Stack spacing={1}>
                                                        <WifiProtectedSetupOutlined/>

                                                        <Stack spacing={0.5}>
                                                            <Typography variant={'h6'}>
                                                                Very easy to return
                                                            </Typography>
                                                            <Typography variant={'caption'}>
                                                                Just phone number.
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                                <Box sx={{
                                                    backgroundColor: '#FEF2F2',
                                                    p: 3,
                                                    borderRadius: 2,
                                                }}>
                                                    <Stack spacing={1}>
                                                        <LanguageOutlined/>

                                                        <Stack spacing={0.5}>
                                                            <Typography variant={'h6'}>
                                                                Nationwide Delivery
                                                            </Typography>
                                                            <Typography variant={'caption'}>
                                                                Fast delivery nationwide.
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Box>

                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                                <Box sx={{
                                                    backgroundColor: '#FFFBEB',
                                                    p: 3,
                                                    borderRadius: 2,
                                                }}>
                                                    <Stack spacing={1}>
                                                        <CurrencyExchangeOutlined/>

                                                        <Stack spacing={0.5}>
                                                            <Typography variant={'h6'}>
                                                                Refunds policy
                                                            </Typography>
                                                            <Typography variant={'caption'}>
                                                                60 days return for any reason
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Stack>

                            </Grid>
                        </Grid>

                        <Divider flexItem/>

                        <Stack spacing={3}>

                            <Typography variant={isMD ? 'h5' : 'h4'}>
                                Customers also purchased
                            </Typography>

                            <Box>
                                <Grid container spacing={3}>
                                    {purchased}
                                </Grid>
                            </Box>
                        </Stack>
                    </Stack>
                </>
            </BaseLayout>
        ) : (
            <BaseLayout middle>
                <ErrorPage/>
            </BaseLayout>
        )
    );
}

ProductPage.propTypes = {};