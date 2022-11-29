import * as React from "react";
import {useContext, useEffect} from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    IconButton,
    Paper,
    Slide,
    Snackbar,
    Stack,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {AppHelper, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import Typography from "@mui/material/Typography";
import {BrokenImageOutlined, CloseOutlined, CurrencyRubleOutlined} from "@mui/icons-material";

let timeoutID

function TransitionLeft(props) {
    return <Slide {...props} direction="left"/>;
}

export function SnackbarAddToCart() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const {route, routes} = useContext(NavigateContext)
    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);

    const [product, setProduct] = React.useState(null);
    const [isShow, setIsShow] = React.useState(null);
    const [idsCache, setIdsCache] = React.useState(cartProducts.map((it) => it.id).join());

    useEffect(() => {
        // get ids
        const ids = cartProducts.map((it) => it.id).join()
        // check if show
        if ((idsCache !== ids && cartProducts.length > idsCache.split(',').length)
            || (idsCache.length === 0 && cartProducts.length === 1)
        ) {
            // show last product
            setProduct(cartProducts[cartProducts.length - 1])
            // show
            setIsShow(true)
            // delay close
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                setIsShow(false)
            }, 3000)
        }
        // update ids
        setIdsCache(ids)
    }, [cartProducts, idsCache])

    return (
        <Snackbar
            open={isShow}
            TransitionComponent={TransitionLeft}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        >
            {Boolean(product) ? (
                <Paper elevation={3} sx={{p: 2, width: isSM ? 250 : 400}}>
                    <Stack spacing={2}>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant={'h5'}>
                                Added to cart!
                            </Typography>
                            <IconButton
                                size={'small'}
                                edge="start"
                                color="inherit"
                                aria-label="cart"
                                onClick={() => {
                                    setIsShow(false)
                                }}
                            >
                                <CloseOutlined/>
                            </IconButton>
                        </Stack>

                        {isSM ? (
                            <Box>
                                <Button
                                    size={'small'}
                                    variant={'outlined'}
                                    sx={{textTransform: 'none'}}
                                    onClick={() => {
                                        setIsShow(false)
                                        route.toLocation(routes.cart)
                                    }}
                                >
                                    View Cart
                                </Button>
                            </Box>
                        ) : (
                            <>
                                <Divider/>
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
                                            <Box>
                                                <Button sx={{p: 0}} onClick={() => {
                                                    setIsShow(false)
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
                                            </Box>

                                            <Stack spacing={1}>
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
                                                label={AppHelper.priceFormat(product.price)}
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
                                                        setIsShow(false)
                                                        route.toLocation(routes.cart)
                                                    }}
                                                >
                                                    View Cart
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </Stack>

                                </Box>
                            </>
                        )}

                    </Stack>
                </Paper>
            ) : null}
        </Snackbar>
    )
}

SnackbarAddToCart.propTypes = {};