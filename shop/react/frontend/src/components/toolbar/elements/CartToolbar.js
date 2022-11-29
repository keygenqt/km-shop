import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, Chip, ClickAwayListener, Fade, Paper, Popper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {AppCache, AppHelper, ConstantStorage, NavigateContext} from "../../../base";
import {BrokenImageOutlined, CurrencyRubleOutlined} from "@mui/icons-material";

/**
 * Application cart toolbar
 */
export function CartToolbar(props) {

    const {
        rows,
        anchor,
        onClose,
    } = props

    const {route, routes} = useContext(NavigateContext)
    const [anchorCart, setAnchorCart] = React.useState(anchor);

    const products = []
    const subtotal = AppHelper.priceFormat(rows.reduce((a, it) => a + (it.price * it.count), 0))

    rows.forEach((product) => {
        products.push((
            <React.Fragment key={`cart-product-item-${product.id}`}>
                <Box sx={{p: 1, borderRadius: 1, backgroundColor: '#F7F0EA'}}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={2}
                        sx={{
                            p: 1,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="stretch"
                            spacing={2}
                        >

                            <Button sx={{p: 0}} onClick={() => {
                                onClose()
                                route.toLocation(routes.product, product.id)
                            }}>
                                <Avatar
                                    variant={'rounded'}
                                    src={product.image1}
                                    sx={{
                                        width: 70,
                                        height: 70
                                    }}
                                >
                                    <BrokenImageOutlined sx={{
                                        width: 40,
                                        height: 40
                                    }}/>
                                </Avatar>
                            </Button>

                            <Stack
                                spacing={1}
                            >
                                <Typography variant="h5">
                                    {product.name}
                                </Typography>
                                <Typography variant="caption">
                                    {product.description}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack
                            spacing={1}
                            justifyContent="space-between"
                        >
                            <Chip
                                size={'small'}
                                label={`${AppHelper.priceFormat(product.price)} x ${product.count}`}
                                variant={'outlined'}
                                color={'success'}
                                sx={{
                                    minWidth: 80
                                }}
                                icon={(
                                    <Box sx={{
                                        pl: 0.6,
                                    }}>
                                        <CurrencyRubleOutlined sx={{
                                            width: 13,
                                            height: 13,
                                        }}/>
                                    </Box>
                                )}
                            />

                            <Box sx={{
                                textAlign: 'right'
                            }}>
                                <Button
                                    size={'small'}
                                    sx={{textTransform: 'none'}}
                                    onClick={() => {
                                        AppCache.arraySet(ConstantStorage.cart, rows.filter((it) => it.id !== product.id))
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>

                </Box>
            </React.Fragment>
        ));
    })

    useEffect(() => {
        if (anchor) setAnchorCart(anchor)
    }, [anchor, anchorCart])

    useEffect(() => {
        if (rows.length === 0) {
            onClose()
        }
    }, [onClose, rows])

    return (
        anchorCart && rows.length ? (
            <ClickAwayListener onClickAway={() => {
                onClose();
            }}>
                <Popper
                    id={'CartToolbar'}
                    open={Boolean(anchor)}
                    anchorEl={anchorCart}
                    transition
                    disablePortal
                    placement="bottom-end"
                    role={undefined}
                    sx={{zIndex: 999}}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 5]
                                }
                            }
                        ]
                    }}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper elevation={1} sx={{
                                zIndex: 999,
                                borderRadius: 2,
                                width: 430,
                                overflow: 'hidden'
                            }}>
                                <Stack>
                                    <Typography variant='h4' sx={{
                                        paddingY: 3,
                                        paddingX: 3,
                                        paddingBottom: 1.5,
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            height: 12,
                                            backgroundColor: 'red',
                                            bottom: -12,
                                            left: 0,
                                            right: 16,
                                            zIndex: 1,
                                            background: 'linear-gradient(0deg, transparent 0%, white 100%)'
                                        },
                                    }}>
                                        Shopping cart
                                    </Typography>

                                    <Stack spacing={1} className={'custom-scroll'} sx={{
                                        maxHeight: 376,
                                        paddingX: 1,
                                        paddingTop: 1.5,
                                        paddingBottom: 1.5,
                                        position: 'relative',
                                    }}>
                                        {products}
                                    </Stack>

                                    <Stack
                                        spacing={2}
                                        sx={{
                                            backgroundColor: '#F9FAFB',
                                            width: '100%',
                                            position: 'relative',
                                            paddingX: 3,
                                            paddingY: 3,
                                            boxSizing: 'border-box',
                                            overflow: 'inherit',
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                height: 12,
                                                backgroundColor: 'red',
                                                top: -12,
                                                left: 0,
                                                right: 16,
                                                zIndex: 1,
                                                background: 'linear-gradient(0deg, white 0%, transparent 100%)'
                                            }
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="flex-start"
                                        >
                                            <Stack spacing={1}>
                                                <Typography variant='h5'>
                                                    Subtotal
                                                </Typography>

                                                <Typography variant='caption'>
                                                    You can go to the shopping cart page to checkout.
                                                </Typography>
                                            </Stack>

                                            <Typography variant='h5'>
                                                {subtotal}
                                            </Typography>
                                        </Stack>

                                        <Box sx={{
                                            textAlign: 'right'
                                        }}>
                                            <Button
                                                size={'large'}
                                                disableElevation
                                                variant={'contained'}
                                                color={'black'}
                                                sx={{
                                                    color: 'white',
                                                    textTransform: 'none'
                                                }}
                                                onClick={() => {
                                                    onClose()
                                                    route.toLocation(routes.cart)
                                                }}
                                            >
                                                View Cart
                                            </Button>
                                        </Box>

                                    </Stack>
                                </Stack>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>
        ) : null
    );
}

CartToolbar.propTypes = {
    rows: PropTypes.array.isRequired,
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};