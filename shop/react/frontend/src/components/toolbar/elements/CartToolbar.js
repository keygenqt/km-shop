import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, Chip, ClickAwayListener, Divider, Fade, Paper, Popper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {NavigateContext} from "../../../base";
import {ConstantProducts} from "../../../base/constants/ConstantProducts";

/**
 * Application cart toolbar
 */
export function CartToolbar(props) {

    const {
        anchor,
        onClose,
    } = props

    const {route, routes} = useContext(NavigateContext)
    const [anchorCart, setAnchorCart] = React.useState(anchor);

    const products = []

    ConstantProducts.forEach((it, index) => {
        products.push((
            <React.Fragment
                key={`cart-product-item-${index}`}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Stack
                        key={`cart-product-item-${index}`}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={2}
                    >

                        <Avatar
                            variant={'rounded'}
                            src={it.image}
                            sx={{
                                width: 70,
                                height: 70,
                                borderRadius: 4
                            }}
                        />

                        <Stack
                            spacing={1}
                        >
                            <Typography variant="h5">
                                {it.title}
                            </Typography>
                            <Typography variant="caption">
                                {it.desc}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        spacing={1}
                        justifyContent="space-between"
                    >
                        <Chip
                            size={'small'}
                            label={it.price}
                            variant={'outlined'}
                            color={'success'}
                            sx={{
                                marginTop: 1,
                                minWidth: 80
                            }}
                        />

                        <Box sx={{
                            textAlign: 'right'
                        }}>
                            <Button
                                size={'small'}
                                sx={{textTransform: 'none'}}
                            >
                                Remove
                            </Button>
                        </Box>
                    </Stack>

                </Stack>

                {ConstantProducts.length - 1 !== index ? <Divider/> : null}
            </React.Fragment>
        ));
    })

    useEffect(() => {
        if (anchor) setAnchorCart(anchor)
    }, [anchor, anchorCart])

    return (
        anchorCart ? (
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
                    sx={{
                        zIndex: 999
                    }}
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
                                borderRadius: 4,
                                maxWidth: 400,
                                overflow: 'hidden'
                            }}>
                                <Stack>

                                    <Typography variant='h5' sx={{
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
                                        maxHeight: 467,
                                        paddingX: 3,
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
                                                background: 'linear-gradient(0deg, #F9FAFB 0%, transparent 100%)'
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
                                                    Shipping and taxes calculated at checkout.
                                                </Typography>
                                            </Stack>

                                            <Typography variant='h5'>
                                                299.00
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
                                                    borderRadius: 7,
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
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};