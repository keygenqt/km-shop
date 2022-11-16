import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {DashboardOutlined} from "@mui/icons-material";

export function DashboardPage() {

    return (
        <Stack>
            <AppCard
                icon={DashboardOutlined}
                color={'info.dark'}
                variant={'combine'}
                title={'Dashboard'}
                subheader={'It will display statistics on sales, site visits and much more'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Typography variant="h3">
                        Dashboard
                    </Typography>
                </Box>
            </AppCard>
        </Stack>
    );
}

DashboardPage.propTypes = {};