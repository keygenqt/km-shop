import * as React from 'react';
import {useContext} from 'react';
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {
    AddCircleOutline,
    BrokenImageOutlined,
    DoneOutlined,
    MoodOutlined,
    RemoveCircleOutline,
    SearchOutlined
} from "@mui/icons-material";
import {AppCache, ConstantLottie, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import Lottie from "lottie-react";

export function CartPage() {

    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);

    const products = []

    const {route, routes} = useContext(NavigateContext)
    const theme = useTheme()
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    const [counters, setCounters] = React.useState([]);

    cartProducts.forEach((product, id) => {

        const collections = []

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

        products.push((
            <React.Fragment
                key={`cart-product-item-${id}`}
            >
                <Stack
                    direction={isSM ? 'column' : 'row'}
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                    sx={{
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

                        <Avatar
                            variant={'rounded'}
                            src={product.image}
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

                        <Stack
                            spacing={1}
                            justifyContent="space-between"
                        >
                            <Stack spacing={1}>
                                <Typography variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2">
                                    {product.desc}
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
                                disabled={(counters.find((it) => it.id === id)?.count ?? 1) <= 1}
                                color={'warning'}
                                onClick={() => {
                                    setCounters(counters.filter((it) => it.id !== id).concat([{
                                        id: id,
                                        count: (counters.find((it) => it.id === id)?.count ?? 1) - 1
                                    }]))
                                }}
                            >
                                <RemoveCircleOutline/>
                            </Button>

                            <Typography variant={'h6'} sx={{
                                fontSize: 15,
                                paddingY: 0.5,
                                paddingX: 1
                            }}>
                                {counters.find((it) => it.id === id)?.count ?? 1}
                            </Typography>

                            <Button
                                color={'warning'}
                                onClick={() => {
                                    setCounters(counters.filter((it) => it.id !== id).concat([{
                                        id: id,
                                        count: (counters.find((it) => it.id === id)?.count ?? 1) + 1
                                    }]))
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
                                label={(product.price * (counters.find((it) => it.id === id)?.count ?? 1)).toFixed(2)}
                                variant={'outlined'}
                                color={'success'}
                                sx={{
                                    marginTop: isSM ? 0 : 1,
                                    minWidth: 100,
                                }}
                            />

                            <Box sx={{
                                textAlign: 'right'
                            }}>
                                <Button
                                    size={'small'}
                                    sx={{textTransform: 'none'}}
                                    onClick={() => {
                                        AppCache.arraySet(
                                            ConstantStorage.cart,
                                            cartProducts.filter((it) => it.id !== product.id)
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

    if (cartProducts.length === 0) {
        return (
            <Stack spacing={isSM ? 4 : 6}>

                <Stack spacing={2}>
                    <Typography variant={isSM ? 'h4' : 'h3'}>
                        Shopping Cart
                    </Typography>
                    <Typography variant={'h5'} sx={{
                        fontWeight: 100,
                        maxWidth: 500
                    }}>
                        Your shopping cart is empty, add the products you are interested in and return.
                    </Typography>
                </Stack>

                <Lottie animationData={ConstantLottie.cartEmpty} style={{
                    width: 100,
                    marginBottom: -20,
                    marginTop: 20
                }}/>

                <Box>
                    <Button
                        variant={'outlined'}
                        color={'secondary'}
                        size={'large'}
                        endIcon={isSM ? null : <SearchOutlined/>}
                        onClick={() => {
                            route.toLocation(routes.exploring)
                        }}
                    >
                        Exploring
                    </Button>
                </Box>

            </Stack>
        )
    }

    return (
        <Stack spacing={isSM ? 4 : 6}>

            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Shopping Cart
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Here you can place an order.
                </Typography>
            </Stack>

            <Box sx={{position: 'relative'}}>

                <Box sx={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    left: -10,
                    top: 172,
                    zIndex: 1
                }}/>

                <Box sx={{
                    position: 'absolute',
                    width: 80,
                    height: 20,
                    backgroundColor: 'success.main',
                    borderRadius: '6px',
                    top: -7,
                    left: 30
                }}/>

                <Grid container spacing={isMD ? 6 : 3}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12} min={12} null={12}>
                        <Stack spacing={isMD ? 2 : 3} sx={{
                            backgroundColor: '#F6F7F9',
                            borderRadius: 2,
                            p: isMD ? 2 : 3,
                            position: 'relative'
                        }}>
                            {products}

                            <Stack spacing={3} sx={{pb: 1}}>
                                <Divider/>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                >
                                    <Typography variant={'h5'} sx={{fontWeight: 100}}>
                                        Order total
                                    </Typography>

                                    <Typography variant={'h5'}>
                                        276.00
                                    </Typography>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Grid>
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} min={12} null={12}>

                        <Stack spacing={isMD ? 2 : 3} sx={{
                            top: 32,
                            position: 'sticky',
                            marginBottom: -2
                        }}>

                            <Box sx={{
                                position: 'absolute',
                                width: 50,
                                height: 50,
                                backgroundColor: '#F09372',
                                borderRadius: '50%',
                                top: -20,
                                right: 40
                            }}/>

                            <Stack spacing={isMD ? 2 : 3} sx={{
                                backgroundColor: '#F6F7F9',
                                borderRadius: 2,
                                p: isMD ? isSM ? 2 : 3 : 4,
                                position: 'relative',
                                top: -25
                            }}>

                                <Stack spacing={1}>
                                    <Typography variant={'h5'}>
                                        Checkout
                                    </Typography>

                                    <Typography variant={'caption'}>
                                        Enter your contact details so that you can be contacted and clarified all the
                                        necessary data on the order.
                                    </Typography>
                                </Stack>

                                <TextField
                                    label="Email"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />
                                <TextField
                                    label="Phone"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />
                                <TextField
                                    label="Additional Information"
                                    variant="filled"
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <Box>
                                    <Button
                                        size={'large'}
                                        disableElevation
                                        variant={'contained'}
                                        color={'secondary'}
                                        startIcon={<DoneOutlined sx={{height: 18}}/>}
                                        onClick={() => {

                                        }}
                                    >
                                        Send Order
                                    </Button>
                                </Box>
                            </Stack>

                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}

CartPage.propTypes = {};