import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, Chip, ClickAwayListener, Fade, Paper, Popper, Stack} from "@mui/material";
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
            <React.Fragment key={`cart-product-item-${index}`}>
                <Box sx={{
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: '#F6F7F9'
                }}>
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
                                    height: 70
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
                                    marginTop: '1px',
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

                </Box>

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
                                borderRadius: 2,
                                maxWidth: 450,
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
                                                    textTransform: 'none'
                                                }}
                                                onClick={() => {
                                                    onClose()
                                                    route.toLocation(routes.cart)
                                                }}
                                            >
                                                Open Cart
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