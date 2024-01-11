import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, Chip, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {AddOutlined, BrokenImageOutlined, EditOutlined, FolderOutlined, OpenInNewOutlined} from "@mui/icons-material";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {ConstantConf} from "../../conf/app/ConstantConf";

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
    useEffectTimout('ProductsPage', () => {
        HttpClient.get.products().then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                categoryID: item.category.id,
                image1: item.image1,
                name: item.name,
                description: item.description,
                price: item.price,
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
                                    field: 'image1',
                                    headerName: 'Image',
                                    minWidth: 70,
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Avatar
                                        alt={params.row.name}
                                        src={params.row.image1}
                                        sx={{width: 24, height: 24, marginLeft: '5px'}}
                                    >
                                        <BrokenImageOutlined sx={{width: 18, height: 18}}/>
                                    </Avatar>
                                },
                                {
                                    minWidth: 0,
                                    field: 'name',
                                    headerName: 'Name'
                                },
                                {
                                    minWidth: 120,
                                    field: 'price',
                                    headerName: 'Price',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Chip
                                        sx={{minWidth: 90}}
                                        color={'secondary'}
                                        label={params.row.price.toFixed(2)} variant="outlined"/>
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
                                                HttpClient.put.productState(params.row.id, new Requests.ProductStateRequest(
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
                                    minWidth: 50,
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: (params) => [
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
