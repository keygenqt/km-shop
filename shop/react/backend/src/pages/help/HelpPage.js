import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {ConnectWithoutContactOutlined, EmailOutlined, VisibilityOutlined} from "@mui/icons-material";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {MessageDialog} from "./elements/MessageDialog";

export function HelpPage() {

    // navigate app
    const {route} = useContext(NavigateContext)

    // get cache page
    const [cache] = React.useState(AppCache.objectGet(ConstantStorage.HelpPage, {
        page: 0,
        data: null,
        notChecked: true
    }));

    // data
    const [page, setPage] = React.useState(cache.page);
    const [data, setData] = React.useState(cache.data);
    const [notChecked, setNotChecked] = React.useState(cache.notChecked);

    // page logic variable
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [refresh, setRefresh] = React.useState(true);
    const [showRow, setShowRow] = React.useState(null);

    // update cache
    useEffect(() => {
        AppCache.objectSet(ConstantStorage.HelpPage, {
            page: page,
            data: data,
            notChecked: notChecked,
        })
    }, [data, page, notChecked])

    // request data
    useEffectTimout(() => {
        HttpClient.get.messages().then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                email: item.email,
                message: item.message,
                isChecked: item.isChecked,
                createAt: item.createAt,
                updateAt: item.updateAt,
            })).filter((it) => notChecked ? !it.isChecked : true))
            setLoading(false)
            setError(null)
        }).catch(async (error) => {
            route.logout(error)
            setError(error.message)
            setLoading(false)
        });
    }, [refresh, notChecked], () => {
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

            <MessageDialog
                row={showRow}
                onClose={() => {
                    setShowRow(null)
                }}
            />

            <Stack>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{paddingBottom: 2}}
                >
                    <FormControlLabel
                        control={<Switch
                            disabled={loading}
                            checked={Boolean(notChecked)}
                            onChange={(event, checked) => setNotChecked(checked)}
                        />}
                        label={"Not Checked"}
                        labelPlacement={'start'}
                    />
                </Stack>

                <AppCard
                    icon={ConnectWithoutContactOutlined}
                    color={'secondary.dark'}
                    variant={'combine'}
                    title={'Help Desk'}
                    subheader={'Communication with buyers and help them with purchases'}
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
                                    field: 'message',
                                    headerName: 'Message'
                                },
                                {
                                    field: 'isChecked',
                                    headerName: 'Checked',
                                    minWidth: 80,
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => {
                                        return <Switch
                                            sx={{
                                                marginLeft: '-4px',
                                            }}
                                            checked={Boolean(params.row.isChecked)}
                                            onChange={(event, checked) => {
                                                setError(null)
                                                setLoading(true)
                                                params.row.isChecked = checked
                                                HttpClient.put.message(params.row.id, new Requests.MessageRequest(
                                                    params.row.email,
                                                    params.row.message,
                                                    params.row.isChecked,
                                                )).then(async () => {
                                                    setRefresh(!refresh)
                                                }).catch(async (error) => {
                                                    route.logout(error)
                                                    setError(error.message)
                                                    setLoading(false)
                                                });
                                            }}
                                        />
                                    }
                                },
                                {
                                    minWidth: 90,
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: (params) => [
                                        (
                                            <GridActionsCellItem color="primary" onClick={() => {
                                                route.openEmail(params.row.email)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Send">
                                                    <EmailOutlined/>
                                                </Tooltip>
                                            )} label="Send"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={() => {
                                                setShowRow(params.row)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Read">
                                                    <VisibilityOutlined/>
                                                </Tooltip>
                                            )} label="Read"/>
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

HelpPage.propTypes = {};