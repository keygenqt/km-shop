import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {ConnectWithoutContactOutlined} from "@mui/icons-material";

export function HelpPage() {
    return (
        <Stack>
            <AppCard
                icon={ConnectWithoutContactOutlined}
                color={'warning.dark'}
                variant={'combine'}
                title={'Help Desk'}
                subheader={'Communication with buyers and help them with purchases'}
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

HelpPage.propTypes = {};