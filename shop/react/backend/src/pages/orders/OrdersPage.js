import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Chip, Stack, Tooltip} from "@mui/material";
import PropTypes from "prop-types";
import {AppCard, SnackbarError} from "../../components";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, OrderState, useEffectTimout} from "../../base";
import {EmailOutlined, FeedOutlined} from "@mui/icons-material";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

export function OrdersPage(props) {

    const {
        icon,
        filter,
    } = props

    const cacheKey = `${ConstantStorage.OrdersPage}-${filter.name}`

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    // get cache page
    const [cache, setCache] = React.useState(AppCache.objectGet(cacheKey, {
        page: 0,
        data: null
    }));

    // data
    const [page, setPage] = React.useState(cache.page);
    const [data, setData] = React.useState(cache.data);

    // page logic variable
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [refresh, setRefresh] = React.useState(true);

    // update cache
    useEffect(() => {
        setCache(AppCache.objectGet(cacheKey, {
            page: 0,
            data: null
        }))
    }, [cacheKey])

    useEffect(() => {
        setPage(cache.page)
        setData(cache.data)
    }, [cache])

    useEffect(() => {
        AppCache.objectSet(cacheKey, {
            page: page,
            data: data
        })
    }, [cacheKey, data, page])

    // request data
    useEffectTimout(() => {
        HttpClient.get.orders(filter).then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                email: item.email,
                phone: item.phone,
                address: item.address,
                note: item.note,
                sum: item.sum.toFixed(2),
                state: item.state.name,
                createAt: item.createAt,
                updateAt: item.updateAt,
                // custom
                contact: item.email ? item.email : item.phone,
            })))
            setLoading(false)
            setError(null)
        }).catch(async (error) => {
            route.logout(error)
            setError(error.message)
            setLoading(false)
        });
    }, [filter, refresh], () => {
        setError(null)
        setLoading(true)
    })

    return (
        <>
            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            <Stack>
                <AppCard
                    icon={icon}
                    color={'secondary.dark'}
                    variant={'combine'}
                    title={'Orders'}
                    subheader={'List of orders placed on the site'}
                    disabled={loading}
                    onRefresh={() => {
                        setRefresh(!refresh)
                    }}
                >
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 3
                    }}>
                        <AppDataGrid
                            page={page}
                            onChangePage={(page) => setPage(page)}
                            loading={loading}
                            rows={data}
                            columns={[
                                {
                                    minWidth: 200,
                                    field: 'contact',
                                    headerName: 'Contact'
                                },
                                {
                                    minWidth: 0,
                                    field: 'note',
                                    headerName: 'Note',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => params.row.note ? (
                                        <Typography variant="body2">
                                            {params.row.note}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body2" sx={{
                                            color: '#676767',
                                            fontStyle: 'italic'
                                        }}>
                                            Empty
                                        </Typography>
                                    )
                                },
                                {
                                    minWidth: 140,
                                    field: 'sum',
                                    headerName: 'Sum',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Chip
                                        sx={{minWidth: 110}}
                                        color={'error'}
                                        label={params.row.sum} variant="outlined"/>
                                },
                                {
                                    minWidth: 90,
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: (params) => [
                                        (
                                            <GridActionsCellItem color="primary" onClick={() => {
                                                if (params.row.email) {
                                                    route.openEmail(params.row.email)
                                                } else {
                                                    route.openPhone(params.row.phone)
                                                }
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Send">
                                                    <EmailOutlined/>
                                                </Tooltip>
                                            )} label="Send"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="success" onClick={() => {
                                                if (filter === OrderState.NEW) {
                                                    route.toLocation(routes.orderNewView, params.row.id)
                                                } else if (filter === OrderState.PENDING) {
                                                    route.toLocation(routes.orderPendingView, params.row.id)
                                                } else if (filter === OrderState.COMPLETED) {
                                                    route.toLocation(routes.orderCompletedView, params.row.id)
                                                }
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Info">
                                                    <FeedOutlined/>
                                                </Tooltip>
                                            )} label="Info"/>
                                        ),
                                    ]
                                },
                            ]}
                        />
                    </Box>
                </AppCard>
            </Stack>
        </>
    );
}

OrdersPage.propTypes = {
    icon: PropTypes.object.isRequired,
    filter: PropTypes.any.isRequired
};