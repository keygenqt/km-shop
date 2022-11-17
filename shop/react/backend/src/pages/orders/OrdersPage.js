import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Chip, Stack, Tooltip} from "@mui/material";
import PropTypes from "prop-types";
import {AppCard, SnackbarError} from "../../components";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, OrderState} from "../../base";
import {EmailOutlined, FeedOutlined} from "@mui/icons-material";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";

let timeoutList

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
    useEffect(() => {
        setError(null)
        setLoading(true)
        clearTimeout(timeoutList)
        timeoutList = setTimeout(() => {
            setLoading(false)
            HttpClient.get.orders(filter).then(async (response) => {
                setData(response.toArray().map((item) => ({
                    id: item.id,
                    email: item.email,
                    phone: item.phone,
                    state: item.state.name,
                    createAt: item.createAt,
                    updateAt: item.updateAt,
                    // custom
                    contact: item.email ? item.email : item.phone,
                    productsCount: item.products.length,
                })))
                setLoading(false)
                setError(null)
            }).catch(async (response) => {
                setError(response.message)
                setLoading(false)
            });
        }, 1000)
    }, [filter, refresh])

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
                                    minWidth: 0,
                                    field: 'contact',
                                    headerName: 'Contact'
                                },
                                {
                                    minWidth: 90,
                                    field: 'productsCount',
                                    headerName: 'Products',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Chip
                                        sx={{minWidth: 60}}
                                        color={'warning'}
                                        label={params.row.productsCount} variant="outlined"/>
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
                                                }
                                                else if (filter === OrderState.PENDING) {
                                                    route.toLocation(routes.orderPendingView, params.row.id)
                                                }
                                                else if (filter === OrderState.COMPLETED) {
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