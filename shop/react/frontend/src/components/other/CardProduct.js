import PropTypes from "prop-types";
import {Avatar, Box, Button, Card, CardActions, CardContent, Chip, IconButton, Stack, Typography} from "@mui/material";
import {AddShoppingCartOutlined, BrokenImageOutlined, CurrencyRubleOutlined, Star} from "@mui/icons-material";
import {AppCache, AppHelper, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import * as React from "react";
import {useContext} from "react";
import {ValueType} from "../../base/route/ValueType";

export function CardProduct(props) {

    const {
        product
    } = props

    const {route, routes} = useContext(NavigateContext)
    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);
    const isCartAdded = Boolean(cartProducts.find((it) => it.id === product.id))

    return (
        <Box sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: '#F6F7F9',
        }}>
            <Card variant={'outlined'} sx={{
                border: 'none',
                position: 'relative',
            }}>
                <Avatar
                    src={product.image1}
                    sx={{
                        borderRadius: 0,
                        height: 210,
                        width: '100%'
                    }}
                >
                    <BrokenImageOutlined sx={{
                        width: 90,
                        height: 90
                    }}/>
                </Avatar>

                <CardContent>
                    <Stack spacing={1}>

                        <Stack>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>

                            <Stack justifyContent={'center'} sx={{
                                height: 40
                            }}>
                                <Typography className={'TextMax2'} variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </Stack>

                        </Stack>

                        <Stack spacing={1} direction={'row'} justifyContent={'space-between'}>
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
                                    }}>
                                        <CurrencyRubleOutlined sx={{
                                            width: 14,
                                            height: 14,
                                        }}/>
                                    </Box>
                                )}
                            />

                            <Stack direction={'row'} spacing={0.7} alignItems={'center'}>
                                <Star sx={{width: 18, height: 18, color: '#FBBF23'}}/>
                                <Typography variant="body2" color="text.secondary">
                                    4.0
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                </CardContent>

                <CardActions disableSpacing>
                    <Stack spacing={1} sx={{width: '100%', mt: -1.5}}>
                        <Box sx={{
                            height: 16,
                            left: -10,
                            width: 'calc(100% + 20px)',
                            position: 'relative',
                            backgroundColor: '#F6F7F9'
                        }}/>

                        <Stack direction={'row'} justifyContent={'space-between'} sx={{width: '100%'}}>
                            <IconButton
                                disabled={isCartAdded}
                                size={'small'}
                                onClick={() => {
                                    cartProducts.push({...product, count: 1})
                                    AppCache.arraySet(ConstantStorage.cart, cartProducts)
                                }}
                                sx={{
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderRadius: '50%',
                                    transitionProperty: 'border-color',
                                    transitionTimingFunction: 'ease-in-out',
                                    transitionDuration: '300ms',
                                    '&.Mui-disabled': {
                                        borderColor: 'primary.main',
                                    },
                                    '&.Mui-disabled .MuiSvgIcon-root': {
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                <Box sx={{
                                    p: 0.4,
                                    fontSize: 0,
                                }}>
                                    <AddShoppingCartOutlined color={'gray'} sx={{
                                        transitionDuration: '300ms',
                                        fontSize: 18
                                    }}/>
                                </Box>
                            </IconButton>

                            <Stack alignItems={'center'} justifyContent={'center'}>
                                <Button
                                    variant={'outlined'}
                                    color={'secondary'}
                                    size={'small'}
                                    onClick={() => {
                                        if (route.isPage(routes.product)) {
                                            route.scrollToTopSmooth()
                                            route.toRefreshState(routes.product, product.id)
                                        } else {
                                            route.toLocation(routes.product, product.id)
                                        }
                                    }}
                                >
                                    View
                                </Button>
                            </Stack>

                        </Stack>
                    </Stack>

                </CardActions>
            </Card>
        </Box>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
};