import * as React from 'react';
import {useContext} from 'react';
import {Avatar, Box, Button, Chip, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {BrokenImageOutlined, CurrencyRubleOutlined, NumbersOutlined} from "@mui/icons-material";
import {AppHelper, NavigateContext} from "../../../base";
import {GenericIcon} from "../../../components";

export function OrderViewProductsPage(props) {

    const {
        data
    } = props

    const theme = useTheme()
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
                        direction={'row'}
                    >
                        <Box>
                            <Button sx={{p: 0}} onClick={() => {
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
                    Order state
                </Typography>
                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    <Chip
                        icon={<NumbersOutlined/>}
                        size={'medium'}
                        label={data.number}
                        variant={'outlined'}
                        color={'secondary'}
                    />
                </Typography>
            </Stack>

            <Stack spacing={2} sx={{
                backgroundColor: '#F6F7F9',
                p: 2,
                borderRadius: 2
            }}>
                {products}
            </Stack>
        </Stack>
    )
}

OrderViewProductsPage.propTypes = {
    data: PropTypes.object.isRequired,
};