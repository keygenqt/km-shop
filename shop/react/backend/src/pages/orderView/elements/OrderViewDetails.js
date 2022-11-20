import * as React from 'react';
import {AppCard} from "../../../components";
import {Box, Chip, Divider, Stack, ToggleButton, ToggleButtonGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {NewReleasesOutlined, PendingActionsOutlined, VerifiedOutlined} from "@mui/icons-material";
import {HttpClient, OrderState, Requests} from "../../../base";
import {OrderViewDetailsProducts} from "./OrderViewDetailsProducts";

export function OrderViewDetails(props) {

    const {
        icon,
        data,
        onChange,
        onError,
    } = props

    const [state, setState] = React.useState(data.state);
    const [loading, setLoading] = React.useState(false);

    return (
        <AppCard
            disabled={loading}
            icon={icon}
            color={'secondary.dark'}
            variant={'combine'}
            title={'Order Details'}
            subheader={'October 20, 2022 12:45 PM'}
        >
            <Box sx={{
                paddingTop: 1,
                paddingBottom: 3
            }}>
                <Stack spacing={2}>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >

                        <Stack>
                            <Typography variant="h5">
                                State
                            </Typography>
                            <Typography variant="caption">
                                Order status. You can change it by toggling it.
                            </Typography>
                        </Stack>

                        <ToggleButtonGroup
                            size={'small'}
                            value={state}
                            exclusive
                            onChange={(event, it) => {
                                setLoading(true)
                                HttpClient.put.orderState(data.id, new Requests.OrderStateRequest(
                                    it
                                )).then(async (response) => {
                                    setState(it)
                                    setLoading(false)
                                    onChange(response)
                                }).catch(async (error) => {
                                    onError(error.message)
                                    setLoading(false)
                                });
                            }}
                            aria-label="text alignment"
                        >
                            <ToggleButton
                                color="primary"
                                value={OrderState.NEW}
                                aria-label="left aligned"
                            >
                                <NewReleasesOutlined/>
                            </ToggleButton>
                            <ToggleButton
                                color="secondary"
                                value={OrderState.PENDING}
                                aria-label="centered"
                            >
                                <PendingActionsOutlined/>
                            </ToggleButton>
                            <ToggleButton
                                color="success"
                                value={OrderState.COMPLETED}
                                aria-label="right aligned"
                            >
                                <VerifiedOutlined/>
                            </ToggleButton>
                        </ToggleButtonGroup>

                    </Stack>

                    <Divider/>

                    <OrderViewDetailsProducts
                        rows={data.products}
                    />

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{
                            paddingTop: 1
                        }}
                    >
                        <Typography variant="h4">
                            Total
                        </Typography>

                        <Chip
                            sx={{minWidth: 130}}
                            color={'error'}
                            label={data.sum.toFixed(2)}
                            variant="outlined"
                        />

                    </Stack>

                </Stack>
            </Box>
        </AppCard>
    );
}

OrderViewDetails.propTypes = {
    icon: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
};