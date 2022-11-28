import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {CardProduct} from "../../../components/other/CardProduct";

export function ProductsPurchasedPage(props) {

    const {
        rows
    } = props

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack spacing={3}>
            <Typography variant={isMD ? 'h5' : 'h4'}>
                Customers also purchased
            </Typography>
            <Box>
                <Grid container spacing={3}>
                    {rows.map((product, index) => (
                        <Grid key={`exploring-product-item-${index}`} item xl={3} lg={3} md={4} sm={6} xs={12} min={12}
                              null={12}>
                            <CardProduct product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}

ProductsPurchasedPage.propTypes = {
    rows: PropTypes.array.isRequired,
};