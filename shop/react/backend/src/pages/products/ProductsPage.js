import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {AddOutlined, EditOutlined, FolderOutlined, VisibilityOutlined} from "@mui/icons-material";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";

export function ProductsPage() {

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    // get cache page
    const [cache] = React.useState(AppCache.objectGet(ConstantStorage.ProductsPage, {
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
        AppCache.objectSet(ConstantStorage.ProductsPage, {
            page: page,
            data: data,
            published: published,
        })
    }, [data, page, published])

    // request data
    useEffectTimout(() => {
        HttpClient.get.products().then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                categoryID: item.category.id,
                image: item.image,
                name: item.name,
                description: item.description,
                price: item.price,
                isPublished: item.isPublished,
                createAt: item.createAt,
                updateAt: item.updateAt,
            })).filter((it) => published ? it.isPublished : true))
            setLoading(false)
            setError(null)
        }).catch(async (response) => {
            setError(response.message)
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
                            route.toLocation(routes.productCreate)
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
                    icon={FolderOutlined}
                    color={'secondary.dark'}
                    variant={'combine'}
                    title={'Products'}
                    subheader={'List of products for sale'}
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
                                    field: 'image',
                                    headerName: 'Image',
                                    minWidth: 70,
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Avatar
                                        alt={params.row.name}
                                        src={params.row.image}
                                        sx={{width: 24, height: 24, marginLeft: '5px'}}
                                    />
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
                                                HttpClient.put.product(params.row.id, new Requests.ProductRequest(
                                                    params.row.categoryID,
                                                    params.row.image,
                                                    params.row.name,
                                                    params.row.description,
                                                    params.row.price,
                                                    params.row.isPublished,
                                                )).then(async (response) => {
                                                    setRefresh(!refresh)
                                                }).catch(async (response) => {
                                                    setError(response.message)
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
                                                route.openUrlNewTab(`http://localhost:8086/${params.row.id}`)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Look">
                                                    <VisibilityOutlined/>
                                                </Tooltip>
                                            )} label="Look"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={() => {
                                                route.toLocation(routes.productEdit, params.row.id)
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

ProductsPage.propTypes = {};