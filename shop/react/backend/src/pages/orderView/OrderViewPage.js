import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Grid, Stack} from "@mui/material";
import {SnackbarError} from "../../components";
import {useParams} from "react-router";
import PropTypes from "prop-types";
import {HttpClient, NavigateContext, OrderState, useEffectTimout} from "../../base";
import {NotFoundPage} from "../error/NotFoundPage";
import {LoadingOrderPage} from "./elements/LoadingOrderPage";
import {OrderViewCustomer} from "./elements/OrderViewCustomer";
import {OrderViewNote} from "./elements/OrderViewNote";
import {OrderViewDetails} from "./elements/OrderViewDetails";

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
                    route.toRefreshState(routes.orderNewView, data.id)
                    break;
                case OrderState.PENDING:
                    route.toRefreshState(routes.orderPendingView, data.id)
                    break;
                case OrderState.COMPLETED:
                    route.toRefreshState(routes.orderCompletedView, data.id)
                    break;
                case OrderState.CANCELED:
                    route.toRefreshState(routes.orderCanceledView, data.id)
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
                        <Grid container spacing={2}>
                            <Grid item xl={8} lg={8} md={8} sm={12} xs={12} min={12} null={12}>
                                <Stack spacing={2}>
                                    <OrderViewDetails
                                        loading={loading}
                                        icon={icon}
                                        data={data}
                                        onChange={(data) => setData(data)}
                                        onError={(error) => setError(error)}
                                        onRefresh={() => setRefresh(!refresh)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                                <Stack spacing={2}>
                                    <OrderViewCustomer
                                        loading={loading}
                                        data={data}
                                        onChange={(data) => setData(data)}
                                    />
                                    <OrderViewNote
                                        loading={loading}
                                        data={data}
                                        onChange={(data) => setData(data)}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
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