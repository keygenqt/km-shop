import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Stack} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {useParams} from "react-router";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {HttpClient, NavigateContext, OrderState, useEffectTimout} from "../../base";
import {NotFoundPage} from "../error/NotFoundPage";
import {LoadingOrderPage} from "./elements/LoadingOrderPage";

export function OrderViewPage(props) {

    const {
        icon,
        filter,
    } = props

    let {id} = useParams();

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    const [data, setData] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [errorCode, setErrorCode] = React.useState(200);
    const [loading, setLoading] = React.useState(id !== undefined);

    // load
    useEffectTimout(() => {
        if (Boolean(id)) {
            HttpClient.get.order(id).then(async (response) => {
                setData(response)
                setLoading(false)
            }).catch(async (error) => {
                route.logout(error)
                setErrorCode(error.code)
                setError(error.message)
                setLoading(false)
            });
        }
    }, [id, refresh], () => {
        if (Boolean(id)) {
            setError(null)
            setLoading(true)
        }
    }, 1000)

    // change route if state != filter
    useEffect(() => {
        if (data !== null && data.state !== filter) {
            // eslint-disable-next-line default-case
            switch (data.state) {
                case OrderState.NEW:
                    route.toLocationPush(routes.orderNewView, data.id)
                    break;
                case OrderState.PENDING:
                    route.toLocationPush(routes.orderPendingView, data.id)
                    break;
                case OrderState.COMPLETED:
                    route.toLocationPush(routes.orderCompletedView, data.id)
                    break;
            }
        }
    }, [data, filter, route, routes])

    return (
        <>
            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            {errorCode !== 200 || id === undefined ? (
                <NotFoundPage/>
            ) : (
                data === null ? (
                    <LoadingOrderPage/>
                ) : (
                    <Stack>
                        <AppCard
                            disabled={loading}
                            onRefresh={() => setRefresh(!refresh)}
                            icon={icon}
                            color={'secondary.dark'}
                            variant={'combine'}
                            title={'Orders'}
                            subheader={'Here is the complete information about the order'}
                        >
                            <Box sx={{
                                paddingTop: 1,
                                paddingBottom: 3
                            }}>
                                <Stack spacing={2}>

                                    <Typography variant="h4">
                                        ID: {data.id}
                                    </Typography>

                                    <Typography variant="h4">
                                        State: {data.state.name}
                                    </Typography>

                                    <Typography variant="h4">
                                        Email: {data.email}
                                    </Typography>

                                </Stack>
                            </Box>
                        </AppCard>
                    </Stack>
                )

            )}
        </>
    );
}

OrderViewPage.propTypes = {
    icon: PropTypes.object.isRequired,
    filter: PropTypes.any.isRequired
};