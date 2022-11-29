import * as React from 'react';
import {Avatar, Box, Button, Chip, Stack, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {AppHelper, NavigateContext} from "../../../base";
import {BrokenImageOutlined} from "@mui/icons-material";
import {useContext} from "react";

export function OrderViewDetailsProduct(props) {

    const {route, routes} = useContext(NavigateContext)

    const {
        row,
    } = props

    const {
        price,
        sum,
        count,
        product,
    } = row

    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Stack
            direction={isMD ? 'column' : 'row'}
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
        >
            <Stack
                direction={isXS ? 'column' : 'row'}
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Avatar
                    variant="rounded"
                    alt={product.name}
                    src={AppHelper.isImage(product.image1) ? `${product.image1}` : null}
                    sx={{width: 72, height: 72}}
                >
                    <BrokenImageOutlined/>
                </Avatar>

                <Stack
                    justifyContent="space-between"
                    sx={{minHeight: 72}}
                    spacing={0.5}
                >
                    <Box>
                        <Button
                            color={'inherit'}
                            sx={{
                                paddingY: 0,
                                paddingX: 1,
                                position: 'relative',
                                left: -8,
                                whiteSpace: 'normal',
                                textAlign: 'left'
                            }}
                            onClick={() => {
                                route.openUrlNewTab(route.createLink(routes.productEdit, product.id))
                            }}
                        >
                            <Typography variant="h5">
                                {product.name}
                            </Typography>
                        </Button>
                    </Box>

                    <Typography variant="caption" sx={{
                        fontWeight: 'bold'
                    }}>
                        Price: {product.price.toFixed(2)}
                    </Typography>

                    <Typography variant="caption">
                        {product.description}
                    </Typography>
                </Stack>

            </Stack>

            <Stack
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
            >
                <Chip
                    sx={{minWidth: 130}}
                    color={'secondary'}
                    label={`${price.toFixed(2)} x ${count}`}
                    variant="outlined"
                />
                <Chip
                    sx={{minWidth: 130}}
                    color={'primary'}
                    label={sum.toFixed(2)}
                    variant="outlined"
                />
            </Stack>

        </Stack>
    );
}

OrderViewDetailsProduct.propTypes = {
    row: PropTypes.object.isRequired,
};