import * as React from 'react';
import {useEffect} from 'react';
import {AppCard} from "../../../components";
import {Box, Chip, Divider, Stack, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {BlockOutlined, NewReleasesOutlined, PendingActionsOutlined, VerifiedOutlined} from "@mui/icons-material";
import {HttpClient, OrderState, Requests} from "../../../base";
import {OrderViewDetailsProducts} from "./OrderViewDetailsProducts";

export function OrderViewDetails(props) {

    const {
        icon,
        data,
        onChange,
        onError,
        onRefresh,
    } = props

    const [state, setState] = React.useState(data.state);
    const [loading, setLoading] = React.useState(false);

    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        setLoading(props.loading)
    }, [props.loading])

    return (
        <AppCard
            disabled={loading}
            onRefresh={onRefresh}
            icon={icon}
            color={'secondary.dark'}
            variant={'combine'}
            title={'Order Details'}
            subheader={data.number}
        >
            <Box sx={{
                paddingTop: 1,
                paddingBottom: 3
            }}>
                <Stack spacing={2}>
                    <Stack
                        direction={isXS ? 'column' : 'row'}
                        justifyContent="space-between"
                        alignItems={isXS ? 'flex-start' : 'center'}
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
                            disabled={loading}
                            size={'small'}
                            value={state}
                            exclusive
                            onChange={(event, it) => {
                                const saveState = state
                                setState(it)
                                setLoading(true)
                                setTimeout(() => {
                                    HttpClient.put.orderState(data.id, new Requests.OrderStateRequest(
                                        it
                                    )).then(async (response) => {
                                        setState(it)
                                        setLoading(false)
                                        onChange(response)
                                    }).catch(async (error) => {
                                        setState(saveState)
                                        onError(error.message)
                                        setLoading(false)
                                    });
                                }, 500)
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
                            <ToggleButton
                                color="error"
                                value={OrderState.CANCELED}
                                aria-label="right aligned"
                            >
                                <BlockOutlined/>
                            </ToggleButton>
                        </ToggleButtonGroup>

                    </Stack>

                    <Divider/>

                    <OrderViewDetailsProducts
                        loading={loading}
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
                            sx={{
                                minWidth: 130,
                                opacity: loading ? 0.6 : 1
                            }}
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
    loading: PropTypes.bool.isRequired,
    icon: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
};