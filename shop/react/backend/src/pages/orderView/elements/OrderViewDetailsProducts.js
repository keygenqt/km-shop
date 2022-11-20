import * as React from 'react';
import {Box, Divider, Stack} from "@mui/material";
import PropTypes from "prop-types";
import {OrderViewDetailsProduct} from "./OrderViewDetailsProduct";

export function OrderViewDetailsProducts(props) {

    const {
        rows,
    } = props

    const products = []

    rows.forEach((item, index) => {
        products.push((
            <Stack
                key={`detail-product-${index}`}
                spacing={2}
            >
                <OrderViewDetailsProduct
                    row={item}
                />

                {index < rows.length - 1 ? (
                    <Divider/>
                ) : null}

            </Stack>
        ))
    })

    return (
        <Stack spacing={2} sx={{
            p: 2,
            backgroundColor: '#f6f6f6a3',
            borderRadius: 3
        }}>
            {products}
        </Stack>
    );
}

OrderViewDetailsProducts.propTypes = {
    rows: PropTypes.array.isRequired,
};