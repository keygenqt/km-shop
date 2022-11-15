import * as React from 'react';
import {useEffect} from 'react';
import {Box, Chip, Stack} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {DeleteOutline, EditOutlined, PeopleOutlined} from "@mui/icons-material";
import {ConstantKMM} from "../../base";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";
import {ManagerDeleteDialog} from "./elements/ManagerDeleteDialog";

let timeoutList

export function ManagersPage() {

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

            <Stack>
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
                                    minWidth: 200,
                                    field: 'role',
                                    headerName: 'Role',
                                    disableColumnMenu: true,
                                    sortable: false,
                                    renderCell: (params) => <Chip
                                        sx={{minWidth: 100}}
                                        color={params.row.role.name === 'ADMIN' ? 'warning' : 'secondary'}
                                        label={params.row.role.name} variant="outlined"/>
                                },
                                {
                                    minWidth: 90,
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: (params) => [
                                        (
                                            <GridActionsCellItem color="error" onClick={() => {
                                                setError(null)
                                                setDeleteRow(params.row)
                                            }} icon={<DeleteOutline/>} label="Delete"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={() => {
                                                console.log(params.row.id)
                                            }} icon={<EditOutlined/>} label="Edit"/>
                                        )
                                    ]
                                }
                            ]}
                        />
                    </Box>
                </AppCard>
            </Stack>
        </>
    );
}

ManagersPage.propTypes = {};