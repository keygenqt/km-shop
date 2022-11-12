import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {PeopleOutlined} from "@mui/icons-material";

export function ManagersPage() {
    return (
        <Stack>
            <AppCard
                icon={PeopleOutlined}
                color={'gray.dark'}
                variant={'combine'}
                title={'Managers'}
                subheader={'List of site administrators with their access settings'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Typography variant="h3">
                        Grid
                    </Typography>
                </Box>
            </AppCard>
        </Stack>
    );
}

ManagersPage.propTypes = {};