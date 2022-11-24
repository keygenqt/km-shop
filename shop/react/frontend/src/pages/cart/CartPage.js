import * as React from 'react';
import {Alert, Avatar, Box, Button, Chip, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {ConstantProducts} from "../../base/constants/ConstantProducts";
import {AddCircleOutline, RemoveCircleOutline} from "@mui/icons-material";

export function CartPage() {

    const products = []

    const [counters, setCounters] = React.useState([]);

    ConstantProducts.forEach((it, id) => {

        const collections = []

        it.collections.forEach((collection, index) => {
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
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >

                        <Avatar
                            variant={'rounded'}
                            src={it.image}
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: 4
                            }}
                        />

                        <Stack
                            spacing={1}
                            justifyContent="space-between"
                        >
                            <Stack spacing={1}>
                                <Typography variant="h5">
                                    {it.title}
                                </Typography>
                                <Typography variant="body2">
                                    {it.desc}
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
                        direction={'row'}
                        spacing={2}
                    >

                        <Stack
                            direction={'row'}
                            alignItems={'flex-start'}
                            sx={{
                                pt: 1,
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
                            justifyContent="space-between"
                        >
                            <Chip
                                size={'medium'}
                                label={(it.price * (counters.find((it) => it.id === id)?.count ?? 1)).toFixed(2)}
                                variant={'outlined'}
                                color={'success'}
                                sx={{
                                    marginTop: 1,
                                    minWidth: 100,
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

                </Stack>

                {ConstantProducts.length - 1 !== id ? <Divider/> : null}
            </React.Fragment>
        ));
    })

    return (
        <Stack spacing={6}>

            <Typography variant={'h4'}>
                Shopping Cart
            </Typography>

            <Box>
                <Grid container spacing={4}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12} min={12} null={12}>
                        <Stack spacing={3}>
                            {products}
                        </Stack>
                    </Grid>
                    <Grid item xl={1} lg={1} md={1} sm={12} xs={12} min={12} null={12} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Divider
                            orientation="vertical"
                            flexItem
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>

                        <Stack spacing={4} sx={{
                            top: 32,
                            position: 'sticky'
                        }}>
                            <Typography variant={'h4'} sx={{
                                fontSize: 24
                            }}>
                                Checkout
                            </Typography>

                            <Stack spacing={2}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                />
                                <TextField
                                    label="Note"
                                    variant="outlined"
                                    multiline
                                    minRows={4}
                                    maxRows={10}
                                />
                            </Stack>

                            <Stack spacing={2}>
                                <Divider/>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography variant={'h5'} sx={{
                                        color: 'gray.main',
                                        fontWeight: '200',
                                    }}>
                                        Order total
                                    </Typography>

                                    <Typography variant={'h5'}>
                                        276.00
                                    </Typography>
                                </Stack>
                            </Stack>

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

                                }}
                            >
                                Submit Order
                            </Button>

                            <Alert severity="info">
                                Enter your contact details so that you can be contacted and clarified all the necessary data on the order
                            </Alert>

                        </Stack>

                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}

CartPage.propTypes = {};