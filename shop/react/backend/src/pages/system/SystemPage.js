import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {SwapCallsOutlined} from "@mui/icons-material";

export function SystemPage() {
    return (
        <Stack>
            <AppCard
                icon={SwapCallsOutlined}
                color={'gray.dark'}
                variant={'combine'}
                title={'System'}
                subheader={'Running tasks on the server manually'}
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

SystemPage.propTypes = {};