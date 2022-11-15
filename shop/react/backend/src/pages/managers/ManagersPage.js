import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Button, Chip, Stack, Tooltip} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {AddOutlined, DeleteOutline, EditOutlined, EmailOutlined, PeopleOutlined} from "@mui/icons-material";
import {ConstantKMM, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {ManagerDeleteDialog} from "./elements/ManagerDeleteDialog";
import {ValueType} from "../../base/route/ValueType";

let timeoutList

export function ManagersPage() {

    const userAuth = useLocalStorage(ConstantStorage.userAuth, ValueType.object);
    const {route, routes} = useContext(NavigateContext)

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [refresh, setRefresh] = React.useState(true);
    const [deleteRow, setDeleteRow] = React.useState(null);
    const [data, setData] = React.useState([]);

    useEffect(() => {
        setError(null)
        setLoading(true)
        clearTimeout(timeoutList)
        timeoutList = setTimeout(() => {
            setLoading(false)
            ConstantKMM.request.get.admins().then(async (response) => {
                setData(response.toArray())
                setLoading(false)
                setError(null)
            }).catch(async (response) => {
                setError(response.message)
                setLoading(false)
            });
        }, 1000)
    }, [refresh])

    return (
        <>
            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            <ManagerDeleteDialog
                open={Boolean(deleteRow)}
                onPositive={() => {
                    setError(null)
                    setLoading(true)
                    ConstantKMM.request.delete.admin(deleteRow.id).then(async () => {
                        setData(data.filter(function (item) {
                            return item.id !== deleteRow.id
                        }))
                        setLoading(false)
                        setDeleteRow(null)
                    }).catch(async (response) => {
                        setLoading(false)
                        setDeleteRow(null)
                        setError(response.message)
                    });
                }}
                onNegative={() => {
                    setDeleteRow(null)
                }}
            />

            <Stack spacing={2}>

                <Box>
                    <Button
                        disableElevation
                        color='success'
                        variant='contained'
                        sx={{color: 'white', borderRadius: 2}}
                        startIcon={<AddOutlined/>}
                        onClick={() => {
                            route.toLocation(routes.managerCreate)
                        }}
                    >
                        Add
                    </Button>
                </Box>

                <AppCard
                    icon={PeopleOutlined}
                    color={'gray.dark'}
                    variant={'combine'}
                    title={'Managers'}
                    subheader={'List of site administrators with their access settings'}
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
                            loading={loading}
                            rows={data}
                            columns={[
                                {
                                    minWidth: 0,
                                    field: 'email',
                                    headerName: 'Email'
                                },
                                {
                                    minWidth: 130,
                                    field: 'role',
                                    headerName: 'Role',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Chip
                                        sx={{minWidth: 100}}
                                        color={params.row.role.name === 'ADMIN' ? 'warning' : 'secondary'}
                                        label={params.row.role.name} variant="outlined"/>
                                },
                                (userAuth.role === 'ADMIN' ? (
                                    {
                                        minWidth: 130,
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
                                                    route.toLocation(routes.managerEdit, params.row.id)
                                                }} icon={(
                                                    <Tooltip placement="top" arrow title="Edit">
                                                        <EditOutlined/>
                                                    </Tooltip>
                                                )} label="Edit"/>
                                            ),
                                            (
                                                <GridActionsCellItem color="error" onClick={() => {
                                                    setError(null)
                                                    setDeleteRow(params.row)
                                                }} icon={(
                                                    <Tooltip placement="top" arrow title="Delete">
                                                        <DeleteOutline/>
                                                    </Tooltip>

                                                )} label="Delete"/>
                                            ),
                                        ]
                                    }
                                ) : (
                                    {
                                        minWidth: 50,
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
                                        ]
                                    }
                                ))
                            ]}
                        />
                    </Box>
                </AppCard>
            </Stack>
        </>
    );
}

ManagersPage.propTypes = {};