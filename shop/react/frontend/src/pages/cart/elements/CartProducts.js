import * as React from "react";
import {useContext, useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {AppCache, AppHelper, ConstantStorage, NavigateContext} from "../../../base";
import {GenericIcon} from "../../../components";
import {
    AddCircleOutline,
    BrokenImageOutlined,
    CachedOutlined,
    CurrencyRubleOutlined,
    RemoveCircleOutline
} from "@mui/icons-material";
import PropTypes from "prop-types";

export function CartProducts(props) {

    const {
        rows,
        loading,
        disabled,
        onRefresh
    } = props

    const theme = useTheme()
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    const {route, routes} = useContext(NavigateContext)

    const products = []

    rows.slice().reverse().forEach((product) => {

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
            ));
        })

        products.push((
            <React.Fragment key={`cart-product-item-${product.id}`}>
                <Stack
                    direction={isSM ? 'column' : 'row'}
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                    sx={{
                        opacity: (loading || disabled) ? 0.8 : 1,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        p: 2,
                    }}
                >
                    <Stack
                        direction={isLG ? 'column' : 'row'}
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >

                        <Box>
                            <Button sx={{p: 0, width: isSM ? '100%' : 100}} onClick={() => {
                                route.toLocation(routes.product, product.id)
                            }}>
                                <Avatar
                                    variant={'rounded'}
                                    src={product.image1}
                                    sx={{
                                        width: isSM ? '100%' : 100,
                                        height: isSM ? 200 : 100
                                    }}
                                >
                                    <BrokenImageOutlined sx={{
                                        width: 60,
                                        height: 60
                                    }}/>
                                </Avatar>
                            </Button>
                        </Box>

                        <Stack
                            spacing={1}
                            justifyContent="space-between"
                        >
                            <Stack spacing={1}>
                                <Typography variant="h5">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2">
                                    {product.description}
                                </Typography>
                            </Stack>

                            {collections.length ? (
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
                            ) : null}

                        </Stack>
                    </Stack>

                    <Stack
                        direction={isXS ? 'column' : 'row'}
                        spacing={2}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'flex-start'}
                            sx={{
                                pt: isSM ? 0 : 1,
                                userSelect: 'none',
                                '& .MuiButtonBase-root': {
                                    p: 0.5,
                                    minWidth: 0,
                                    borderRadius: '50%'
                                }
                            }}
                        >
                            <Button
                                disabled={(rows.find((it) => it.id === product.id)?.count ?? 1) <= 1 || (loading || disabled)}
                                color={'warning'}
                                onClick={() => {
                                    AppCache.arraySet(
                                        ConstantStorage.cart,
                                        rows?.map((it) => {
                                            if (it.id === product.id) it.count -= 1;
                                            return it
                                        })
                                    )
                                }}
                            >
                                <RemoveCircleOutline/>
                            </Button>

                            <Typography variant={'h6'} sx={{
                                fontSize: 15,
                                paddingY: 0.5,
                                paddingX: 1
                            }}>
                                {rows.find((it) => it.id === product.id)?.count ?? 1}
                            </Typography>

                            <Button
                                disabled={(loading || disabled)}
                                color={'warning'}
                                onClick={() => {
                                    AppCache.arraySet(
                                        ConstantStorage.cart,
                                        rows?.map((it) => {
                                            if (it.id === product.id) it.count += 1;
                                            return it
                                        })
                                    )
                                }}
                            >
                                <AddCircleOutline/>
                            </Button>
                        </Stack>

                        <Stack
                            spacing={1}
                            direction={isSM ? 'row' : 'column'}
                            justifyContent={'space-between'}
                            alignItems={isSM ? 'center' : 'flex-end'}
                            sx={{width: '100%'}}
                        >
                            <Chip
                                size={'medium'}
                                label={AppHelper.priceFormat(product.price * (rows.find((it) => it.id === product.id)?.count ?? 1))}
                                variant={'outlined'}
                                color={'success'}
                                sx={{
                                    marginTop: isSM ? 0 : 1,
                                    minWidth: 100,
                                    borderWidth: 2,
                                    '& .MuiChip-label': {
                                        fontSize: 14
                                    }
                                }}
                                icon={(
                                    <Box sx={{
                                        pt: 0.4,
                                        pl: 0.6,
                                    }}>
                                        <CurrencyRubleOutlined sx={{
                                            width: 16,
                                            height: 16,
                                        }}/>
                                    </Box>
                                )}
                            />

                            <Box sx={{
                                textAlign: 'right'
                            }}>
                                <Button
                                    disabled={(loading || disabled)}
                                    size={'small'}
                                    sx={{textTransform: 'none'}}
                                    onClick={() => {
                                        AppCache.arraySet(
                                            ConstantStorage.cart,
                                            rows.filter((it) => it.id !== product.id)
                                        )
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </React.Fragment>
        ));
    })

    return (
        <Stack spacing={isMD ? 2 : 3} sx={{
            backgroundColor: '#eaf7f2',
            borderRadius: 2,
            p: isMD ? 2 : 3,
            position: 'relative'
        }}>

            <Stack spacing={3}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box sx={{
                        opacity: (loading || disabled) ? 0.7 : 1,
                        backgroundColor: 'secondary.main',
                        borderRadius: '50%'
                    }}>
                        <IconButton
                            disabled={(loading || disabled)}
                            onClick={onRefresh}
                        >
                            <CachedOutlined sx={{color: 'white'}} className={loading ? 'spin' : ''}/>
                        </IconButton>
                    </Box>

                    <Stack direction={'row'} spacing={1} sx={{opacity: (loading || disabled) ? 0.4 : 1}}>
                        <Typography variant={'h5'} sx={{fontWeight: 100}}>
                            Order total:
                        </Typography>
                        <Typography variant={'h5'}>
                            {AppHelper.priceFormat(rows.reduce((a, it) => a + (it.price * it.count), 0))}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider/>
            </Stack>

            {products}

        </Stack>
    );
}

CartProducts.propTypes = {
    loading: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    rows: PropTypes.array.isRequired,
    onRefresh: PropTypes.func.isRequired,
};