import * as React from 'react';
import {Box, Divider, Paper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import {OrderViewDetailsProduct} from "./OrderViewDetailsProduct";

export function OrderViewDetailsProducts(props) {

    const {
        rows,
    } = props

    const products = []

    rows.forEach((item, index) => {
        products.push((
            <Paper
                key={`detail-product-${index}`}
                elevation={0}
                sx={{ p: 2 }}
            >
                <OrderViewDetailsProduct
                    row={item}
                />
            </Paper>
        ))
    })

    return (
        <Stack spacing={2} sx={{
            p: 2,
            backgroundColor: '#0000000f',
            borderBottom: '1px solid #0000006b',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4
        }}>
            {products}
        </Stack>
    );
}

OrderViewDetailsProducts.propTypes = {
    rows: PropTypes.array.isRequired,
};