import * as React from 'react';
import {Paper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import {OrderViewDetailsProduct} from "./OrderViewDetailsProduct";

export function OrderViewDetailsProducts(props) {

    const {
        loading,
        rows,
    } = props

    const products = []

    rows.forEach((item, index) => {
        products.push((
            <Paper
                key={`detail-product-${index}`}
                elevation={0}
                sx={{
                    p: 2,
                    opacity: loading ? 0.7 : 1
                }}
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
            backgroundColor: loading ? '#E4E4E4' : '#0000000f',
            borderBottom: loading ? '1px dotted #0000006b' : '1px solid #0000006b',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4
        }}>
            {products}
        </Stack>
    );
}

OrderViewDetailsProducts.propTypes = {
    loading: PropTypes.bool.isRequired,
    rows: PropTypes.array.isRequired,
};