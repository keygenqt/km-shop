import * as React from 'react';
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const FiltersOrders = {
    filterNew: 'New',
    filterPending: 'Pending',
    filterCompleted: 'Completed',
}

export function OrdersPage(props) {

    const {
        filter
    } = props

    return (
        <Stack>
            <Typography variant="h2">
                Orders {filter}
            </Typography>
        </Stack>
    );
}

OrdersPage.propTypes = {
    filter: PropTypes.string.isRequired,
};