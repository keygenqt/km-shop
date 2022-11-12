import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {CloudOutlined} from "@mui/icons-material";

export function UploadsPage() {
    return (
        <Stack>
            <AppCard
                icon={CloudOutlined}
                color={'gray.dark'}
                variant={'combine'}
                title={'Uploads'}
                subheader={'All uploaded files to the server'}
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

UploadsPage.propTypes = {};