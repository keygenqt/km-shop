import * as React from 'react';
import {useEffect} from 'react';
import {Box, Chip, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {DeleteOutline, EditOutlined, PeopleOutlined, VisibilityOutlined} from "@mui/icons-material";
import {ConstantKMM} from "../../base";
import {GridActionsCellItem} from "@mui/x-data-grid";
import {AppDataGrid} from "../../components/dataGrid/AppDataGrid";

let timeoutID

export function ManagersPage() {

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    useEffect(() => {
        if (loading) {
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                ConstantKMM.request.get.admins().then(async (response) => {
                    setData(response.toArray())
                    setLoading(false)
                    setError(null)
                }).catch(async (response) => {
                    setError(response.message)
                    setLoading(false)
                });
            }, 1000)
        }
    }, [loading])

    return (
        <Stack>
            <AppCard
                icon={PeopleOutlined}
                color={'gray.dark'}
                variant={'combine'}
                title={'Managers'}
                subheader={'List of site administrators with their access settings'}
                disabled={loading}
                onRefresh={() => {
                    setLoading(true)
                }}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    {error ? (
                        <Typography variant="h3">
                            {error ? `Error: ${error}` : 'Loading...'}
                        </Typography>
                    ) : (
                        <AppDataGrid
                            loading={loading}
                            rows={data}
                            columns={[
                                {
                                    minWidth: 'auto',
                                    field: 'email',
                                    headerName: 'Email'
                                },
                                {
                                    minWidth: 120,
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
                                    minWidth: 145,
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: (params) => [
                                        (
                                            <GridActionsCellItem color="error" onClick={(event) => {
                                                console.log(params.row.id)
                                            }} icon={<DeleteOutline/>} label="Delete"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="success" onClick={(event) => {
                                                console.log(params.row.id)
                                            }} icon={<VisibilityOutlined/>} label="Visible"/>
                                        ),
                                        (
                                            <GridActionsCellItem color="secondary" onClick={(event) => {
                                                console.log(params.row.id)
                                            }} icon={<EditOutlined/>} label="Edit"/>
                                        )
                                    ]
                                }
                            ]}
                        />
                    )}
                </Box>
            </AppCard>
        </Stack>
    );
}

ManagersPage.propTypes = {};