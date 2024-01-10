import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Button, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {AddOutlined, EditOutlined, StyleOutlined, VisibilityOutlined} from "@mui/icons-material";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {GenericIcon} from "../../components/other/GenericIcon";

export function CollectionsPage() {

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    // get cache page
    const [cache] = React.useState(AppCache.objectGet(ConstantStorage.CollectionsPage, {
        page: 0,
        data: null,
        published: true
    }));

    // data
    const [page, setPage] = React.useState(cache.page);
    const [data, setData] = React.useState(cache.data);
    const [published, setPublished] = React.useState(cache.published);

    // page logic variable
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [refresh, setRefresh] = React.useState(true);

    // update cache
    useEffect(() => {
        AppCache.objectSet(ConstantStorage.CollectionsPage, {
            page: page,
            data: data,
            published: published,
        })
    }, [data, page, published])

    // request data
    useEffectTimout('CollectionsPage',() => {
        HttpClient.get.collections().then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                key: item.key,
                name: item.name,
                desc: item.desc,
                icon: item.icon,
                isPublished: item.isPublished,
                createAt: item.createAt,
                updateAt: item.updateAt,
            })).filter((it) => published ? it.isPublished : true))
            setLoading(false)
            setError(null)
        }).catch(async (error) => {
            route.logout(error)
            setError(error.message)
            setLoading(false)
        });
    }, [refresh, published], () => {
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

            <Stack spacing={2}>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Button
                        disableElevation
                        color='success'
                        variant='contained'
                        sx={{color: 'white', borderRadius: 2}}
                        startIcon={<AddOutlined/>}
                        onClick={() => {
                            route.toLocation(routes.collectionCreate)
                        }}
                    >
                        Add
                    </Button>

                    <FormControlLabel
                        control={<Switch
                            disabled={loading}
                            checked={Boolean(published)}
                            onChange={(event, checked) => setPublished(checked)}
                        />}
                        label={"Only Published"}
                        labelPlacement={'start'}
                    />
                </Stack>

                <AppCard
                    icon={StyleOutlined}
                    color={'secondary.dark'}
                    variant={'combine'}
                    title={'Collections'}
                    subheader={'List of product collections'}
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
                                    field: 'icon',
                                    headerName: 'Image',
                                    minWidth: 70,
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => (
                                        <Box sx={{
                                            p: 1,
                                            fontSize: 0,
                                            borderRadius: '50%',
                                            backgroundColor: 'secondary.light'
                                        }}>
                                            <GenericIcon sx={{width: 18, height: 18}} iconName={params.row.icon}/>
                                        </Box>
                                    )
                                },
                                {
                                    minWidth: 0,
                                    field: 'name',
                                    headerName: 'Name'
                                },
                                {
                                    field: 'isPublished',
                                    headerName: 'Published',
                                    minWidth: 85,
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => {
                                        return <Switch
                                            checked={Boolean(params.row.isPublished)}
                                            onChange={(event, checked) => {
                                                setError(null)
                                                setLoading(true)
                                                params.row.isPublished = checked
                                                HttpClient.put.collectionState(params.row.id, new Requests.CollectionStateRequest(
                                                    params.row.isPublished,
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
                                            <GridActionsCellItem color="success" onClick={() => {
                                                route.openUrlNewTab(`http://localhost:4012/${params.row.id}`)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Look">
                                                    <VisibilityOutlined/>
                                                </Tooltip>
                                            )} label="Look"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={() => {
                                                route.toLocation(routes.collectionEdit, params.row.id)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Edit">
                                                    <EditOutlined/>
                                                </Tooltip>
                                            )} label="Edit"/>
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

CollectionsPage.propTypes = {};
