import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, Chip, ClickAwayListener, Divider, Fade, Paper, Popper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {ConstantImages, NavigateContext} from "../../../base";

const productsData = [
    {
        image: ConstantImages.common.DSC_0004,
        title: 'Headband beauty',
        desc: 'Cool headband for cool little ones.',
        price: '3200.20'
    },
    {
        image: ConstantImages.common.DSC_0007,
        title: 'Sweet Bow',
        desc: 'Bows for the sweet tooth.',
        price: '300.50'
    },
    {
        image: ConstantImages.common.DSC_0009,
        title: 'Mickey',
        desc: 'Disney stylized bows.',
        price: '900.50'
    },
]

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

    productsData.forEach((it, index) => {
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

                {productsData.length - 1 !== index ? <Divider/> : null}
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
                                pt: 2,
                                pl: 4,
                                pr: 4,
                                borderRadius: 4,
                                maxWidth: 400,
                                overflow: 'hidden'
                            }}>
                                <Stack spacing={1.5}>

                                    <Typography variant='h5' sx={{
                                        paddingY: 1
                                    }}>
                                        Shopping cart
                                    </Typography>

                                    {products}

                                    <Stack
                                        spacing={2}
                                        sx={{
                                            backgroundColor: '#F9FAFB',
                                            width: 'calc(100% + 64px)',
                                            position: 'relative',
                                            left: -32,
                                            marginBottom: -32,
                                            paddingX: 4,
                                            paddingY: 3,
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="flex-start"
                                        >
                                            <Stack spacing={1} >
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