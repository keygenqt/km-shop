import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Avatar, Box, Button, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {
    AddOutlined,
    BrokenImageOutlined,
    CategoryOutlined,
    EditOutlined,
    VisibilityOutlined
} from "@mui/icons-material";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {GridActionsCellItem} from "@mui/x-data-grid";

export function CategoriesPage() {

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    // get cache page
    const [cache] = React.useState(AppCache.objectGet(ConstantStorage.CategoriesPage, {
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
        AppCache.objectSet(ConstantStorage.CategoriesPage, {
            page: page,
            data: data,
            published: published,
        })
    }, [data, page, published])

    // request data
    useEffectTimout('CategoriesPage',() => {
        HttpClient.get.categories().then(async (response) => {
            setData(response.toArray().map((item) => ({
                id: item.id,
                name: item.name,
                image: item.image,
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
                            route.toLocation(routes.categoryCreate)
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
                    icon={CategoryOutlined}
                    color={'secondary.dark'}
                    variant={'combine'}
                    title={'Categories'}
                    subheader={'List of product categories'}
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
                                                HttpClient.put.categoryState(params.row.id, new Requests.CategoryStateRequest(
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
                                                route.openUrlNewTab(`http://localhost:8086/${params.row.id}`)
                                            }} icon={(
                                                <Tooltip placement="top" arrow title="Look">
                                                    <VisibilityOutlined/>
                                                </Tooltip>
                                            )} label="Look"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={() => {
                                                route.toLocation(routes.categoryEdit, params.row.id)
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

CategoriesPage.propTypes = {};