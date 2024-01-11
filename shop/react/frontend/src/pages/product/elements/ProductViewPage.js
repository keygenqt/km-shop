import * as React from 'react';
import {useState} from 'react';
import PropTypes from "prop-types";
import {Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {
    AddCircleOutline,
    AddShoppingCartOutlined,
    CurrencyExchangeOutlined,
    CurrencyRubleOutlined,
    LanguageOutlined,
    LocalShippingOutlined,
    RemoveCircleOutline,
    RemoveShoppingCartOutlined,
    Star,
    WifiProtectedSetupOutlined
} from "@mui/icons-material";
import {ImageSizeBox} from "./ImageSizeBox";
import {GenericIcon} from "../../../components";
import {AppCache, AppHelper, ConstantStorage, useLocalStorage} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";


export function ProductViewPage(props) {

    const {
        product
    } = props

    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [urlImage, setUrlImage] = useState(product.image1);

    const isHashCart = Boolean(cartProducts.find((it) => it.id === product.id))
    const collections = []

    product.collections.forEach((collection, index) => {
        collections.push((
            <Chip
                key={`collections-item-${index}`}
                size={'small'}
                variant={'outlined'}
                color={'secondary'}
                label={collection.name}
                icon={(
                    <Box sx={{
                        pt: 0.2,
                        pl: 0.6,
                        pr: 0.1
                    }}>
                        <GenericIcon iconName={collection.icon} sx={{
                            width: 14,
                            height: 14,
                        }}/>
                    </Box>
                )}
            />
        ))
        ;
    })

    return (
        <Box>        
            <Grid container spacing={isSM ? 3 : 4}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                    <Grid container spacing={1}>
                        <Grid item xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={12} min={12} null={12}>
                            <Stack direction={isSM ? 'row' : 'column'} spacing={0}>

                                <ImageButton
                                    image={product.image1}
                                    disabled={product.image1 === urlImage}
                                    onClick={() => {
                                        setUrlImage(product.image1)
                                    }}
                                />

                                {product.image2 ? (
                                    <ImageButton
                                        image={product.image2}
                                        disabled={product.image2 === urlImage}
                                        onClick={() => {
                                            setUrlImage(product.image2)
                                        }}
                                    />
                                ) : null}

                                {product.image3 ? (
                                    <ImageButton
                                        image={product.image3}
                                        disabled={product.image3 === urlImage}
                                        onClick={() => {
                                            setUrlImage(product.image3)
                                        }}
                                    />
                                ) : null}

                            </Stack>
                        </Grid>
                        <Grid item xl={10.5} lg={10.5} md={10.5} sm={10.5} xs={12} min={12} null={12}>
                            <ImageSizeBox url={urlImage}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                    <Stack spacing={3}>
                        <Box sx={{
                            backgroundColor: '#F6F7F9',
                            p: isMD ? 1 : 2,
                            borderRadius: 2,
                        }}>
                            <Stack spacing={3} sx={{backgroundColor: 'white', borderRadius: 2, p: 2}}>

                                <Typography variant={isSM ? 'h4' : 'h3'}>
                                    {product.name}
                                </Typography>

                                <Stack spacing={2} direction={'row'}>
                                    <Chip
                                        size={'medium'}
                                        label={AppHelper.priceFormat(product.price)}
                                        variant={'outlined'}
                                        color={'success'}
                                        sx={{
                                            marginTop: '1px',
                                            borderWidth: 2,
                                            fontWeight: 400,
                                            fontSize: 14
                                        }}
                                        icon={(
                                            <Box sx={{
                                                pt: 0.4,
                                                pl: 0.6,
                                                pr: 0.1
                                            }}>
                                                <CurrencyRubleOutlined sx={{
                                                    width: 14,
                                                    height: 14,
                                                }}/>
                                            </Box>
                                        )}
                                    />
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
                                            disabled={(cartProducts.find((it) => it.id === product.id)?.count ?? 1) <= 1}
                                            color={'warning'}
                                            onClick={() => {
                                                AppCache.arraySet(
                                                    ConstantStorage.cart,
                                                    cartProducts?.map((it) => {
                                                        if (it.id === product.id) it.count -= 1;
                                                        return it
                                                    })
                                                )
                                            }}
                                        >
                                            <RemoveCircleOutline sx={{width: 32, height: 32}}/>
                                        </Button>

                                        <Typography variant={'h6'} sx={{
                                            fontSize: 18,
                                            paddingY: 0.5,
                                            paddingX: 1
                                        }}>
                                            {cartProducts.find((it) => it.id === product.id)?.count ?? 0}
                                        </Typography>

                                        <Button
                                            color={'warning'}
                                            onClick={() => {
                                                if (isHashCart) {
                                                    AppCache.arraySet(
                                                        ConstantStorage.cart,
                                                        cartProducts?.map((it) => {
                                                            if (it.id === product.id) it.count += 1;
                                                            return it
                                                        })
                                                    )
                                                } else {
                                                    cartProducts.push({...product, count: 1})
                                                    AppCache.arraySet(ConstantStorage.cart, cartProducts)
                                                }
                                            }}
                                        >
                                            <AddCircleOutline sx={{width: 32, height: 32}}/>
                                        </Button>
                                    </Stack>

                                    <Box sx={{width: '100%'}}>

                                        {isHashCart ? (
                                            <Button
                                                fullWidth
                                                disableElevation
                                                variant={'contained'}
                                                color={'black'}
                                                startIcon={<RemoveShoppingCartOutlined/>}
                                                sx={{
                                                    color: 'white',
                                                    paddingY: 2,
                                                    paddingX: 4,
                                                }}
                                                onClick={() => {
                                                    AppCache.arraySet(
                                                        ConstantStorage.cart,
                                                        cartProducts.filter((it) => it.id !== product.id)
                                                    )
                                                }}
                                            >
                                                <Typography variant="h5">
                                                    Удалить с корзины
                                                </Typography>
                                            </Button>
                                        ) : (
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
                                                    cartProducts.push({...product, count: 1})
                                                    AppCache.arraySet(ConstantStorage.cart, cartProducts)
                                                }}
                                            >
                                                <Typography variant="h5">
                                                    Добавить в корзину
                                                </Typography>
                                            </Button>
                                        )}
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
                                        Описание
                                    </Typography>

                                    <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                                        fontWeight: 100,
                                    }}>
                                        {product.description}
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
                                                    Бесплатная доставка
                                                </Typography>
                                                <Typography variant={'caption'}>
                                                    При заказе свыше ₽ 5000.00
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
                                                    Очень легко вернуть
                                                </Typography>
                                                <Typography variant={'caption'}>
                                                    Просто свяжитесь с нами
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
                                                    Доставка
                                                </Typography>
                                                <Typography variant={'caption'}>
                                                    Быстрая доставка по всей стране любым перевозчиком
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
                                                    Политика возврата
                                                </Typography>
                                                <Typography variant={'caption'}>
                                                    60 дней возврата по любой причине
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
        </Box>
    );
}

ProductViewPage.propTypes = {
    product: PropTypes.object.isRequired,
};

function ImageButton(props) {

    const {
        image,
        disabled,
        onClick,
    } = props

    return (
        <Button disabled={disabled} onClick={onClick} sx={{
            minWidth: 'auto',
            maxWidth: 80,
            '&.Mui-disabled:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.3,
                borderRadius: 1,
                backgroundColor: 'primary.main'
            }
        }}>
            <Avatar
                variant={'rounded'}
                src={image}
                sx={{
                    width: '100%',
                    height: 40,
                    borderRadius: 0.5
                }}
            />
        </Button>
    )
}
