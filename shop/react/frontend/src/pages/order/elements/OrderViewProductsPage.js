import * as React from 'react';
import {Box, Chip, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {NumbersOutlined} from "@mui/icons-material";
import {AppHelper} from "../../../base";

export function OrderViewProductsPage(props) {

    const {
        data
    } = props

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

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

            <Box>
                {AppHelper.priceFormat(data.sum)}
            </Box>
        </Stack>
    )
}

OrderViewProductsPage.propTypes = {
    data: PropTypes.object.isRequired,
};