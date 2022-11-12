import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {AppCard} from "../../components";
import {NewReleasesOutlined, PendingActionsOutlined, VerifiedOutlined} from "@mui/icons-material";

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
            <AppCard
                icon={filter === FiltersOrders.filterNew ? NewReleasesOutlined : (filter === FiltersOrders.filterPending ? PendingActionsOutlined : VerifiedOutlined)}
                color={'secondary.dark'}
                variant={'combine'}
                title={'Orders'}
                subheader={'List of orders placed on the site'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Typography variant="h3">
                        Grid with type: {filter}
                    </Typography>
                </Box>
            </AppCard>
        </Stack>
    );
}

OrdersPage.propTypes = {
    filter: PropTypes.string.isRequired,
};