import * as React from 'react';
import {useContext} from 'react';
import {Avatar, Box, Button, Chip, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {
    BlockOutlined,
    BrokenImageOutlined,
    CurrencyRubleOutlined,
    EmailOutlined, InfoOutlined,
    MapOutlined, NewReleasesOutlined, NoteOutlined,
    NumbersOutlined, PendingActionsOutlined, PersonOutline, PhoneOutlined, VerifiedOutlined
} from "@mui/icons-material";
import {AppHelper, NavigateContext} from "../../../base";
import {GenericIcon} from "../../../components";

export function OrderViewProductsPage(props) {

    const {
        data
    } = props

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const {route, routes} = useContext(NavigateContext)

    const products = []

    data.products.forEach((info, index) => {
        const product = info.product

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
            <Box key={`item-order-product-${index}`}>
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
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                        direction={isSM ? 'column' : 'row'}
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

                        <Stack spacing={1}>

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
                        direction={'row'}
                        spacing={2}
                    >
                        <Stack
                            spacing={1}
                            direction={isSM ? 'row' : 'column'}
                            justifyContent={'space-between'}
                            alignItems={isSM ? 'center' : 'flex-end'}
                            sx={{width: '100%'}}
                        >
                            <Chip
                                size={'medium'}
                                label={`${AppHelper.priceFormat(info.price)} x ${info.count}`}
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

                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        ))
    })

    return (
        <Stack spacing={isSM ? 4 : 6}>
            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Order Details
                </Typography>
                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100,
                    maxWidth: 800
                }}>
                    Here you can view the status of your order and information about it. Write down the number or save the link so that you can find it, the information will be updated.
                </Typography>
            </Stack>

            <Box>
                <Grid container spacing={3}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12} min={12} null={12}>
                        <Stack spacing={2} sx={{
                            backgroundColor: '#eaf7f2',
                            p: 2,
                            borderRadius: 2
                        }}>
                            <Stack spacing={1} direction={isSM ? 'column' : 'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Box>
                                    <Chip
                                        icon={isSM ? null : <NumbersOutlined/>}
                                        size={'medium'}
                                        label={data.number}
                                        variant={'outlined'}
                                        color={'secondary'}
                                        sx={{backgroundColor: 'white', fontSize: isSM ? 12 : 14}}
                                    />
                                </Box>
                                <Box>
                                    <Stack direction={'row'} spacing={1}>
                                        <Typography variant={'h5'} sx={{fontWeight: 100}}>
                                            Sum:
                                        </Typography>
                                        <Typography variant={'h5'}>
                                            {AppHelper.priceFormat(data.sum)}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>

                            {products}
                        </Stack>
                    </Grid>
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} min={12} null={12}>
                        <Stack spacing={3}>
                            <Stack spacing={2} sx={{ p: 2, borderRadius: 2, bgcolor: '#F6F7F9', position: 'relative'}}>

                                <Stack direction={'row'} spacing={1}>
                                    <InfoOutlined/>
                                    <Typography variant={'h5'}>
                                        Order Information

                                        <Box sx={{
                                            position: 'absolute',
                                            width: 16,
                                            height: 16,
                                            backgroundColor: 'primary.main',
                                            borderRadius: '50%',
                                            right: 18,
                                            top: -6,
                                            zIndex: 1
                                        }}/>
                                    </Typography>
                                </Stack>

                                <Stack spacing={2} sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    p: 2
                                }}>

                                    {data.state === 'NEW' ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <NewReleasesOutlined color={'primary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                New
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.state === 'PENDING' ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <PendingActionsOutlined color={'secondary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                Pending
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.state === 'COMPLETED' ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <VerifiedOutlined color={'success'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                Completed
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.state === 'CANCELED' ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <BlockOutlined color={'error'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                Canceled
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.note ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <NoteOutlined color={'secondary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                {data.note}
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                </Stack>
                            </Stack>
                            <Stack spacing={2} sx={{ p: 2, borderRadius: 2, bgcolor: '#F6F7F9'}}>
                                <Stack direction={'row'} spacing={1}>
                                    <PersonOutline/>
                                    <Typography variant={'h5'}>
                                        Customer Details
                                    </Typography>
                                </Stack>

                                <Stack spacing={2} sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    p: 2
                                }}>
                                    {data.email ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <EmailOutlined color={'primary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                {data.email}
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.phone ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <PhoneOutlined color={'primary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                {data.phone}
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                    {data.address ? (
                                        <Stack direction={'row'} spacing={2}>
                                            <MapOutlined color={'primary'} sx={{
                                                position: 'relative',
                                                top: 2
                                            }}/>
                                            <Typography variant={'body1'}>
                                                {data.address}
                                            </Typography>
                                        </Stack>
                                    ) : null}

                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

        </Stack>
    )
}

OrderViewProductsPage.propTypes = {
    data: PropTypes.object.isRequired,
};