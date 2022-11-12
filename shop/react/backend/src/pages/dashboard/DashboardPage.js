import * as React from 'react';
import {useEffect} from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantKMM} from "../../base";
import {AppCard} from "../../components";
import {DashboardOutlined} from "@mui/icons-material";

let timeoutID

export function DashboardPage() {

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [rocketsCount, setRocketsCount] = React.useState(true);

    useEffect(() => {
        if (loading) {
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                ConstantKMM.request.get.rocketsDemoAPI().then(async (response) => {
                    setRocketsCount(response.toArray().length)
                    setLoading(false)
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
                icon={DashboardOutlined}
                color={'info.dark'}
                variant={'combine'}
                disabled={loading}
                title={'Dashboard'}
                subheader={'It will display statistics on sales, site visits and much more'}
                onRefresh={() => {
                    setLoading(true)
                }}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    {loading || error ? (
                        <Typography variant="h3">
                            {error ? `Error: ${error}` : 'Loading...'}
                        </Typography>
                    ) : (
                        <Typography variant="h3">
                            Rockets count: {rocketsCount}
                        </Typography>
                    )}
                </Box>
            </AppCard>
        </Stack>
    );
}

DashboardPage.propTypes = {};