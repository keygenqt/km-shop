import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {FolderOutlined} from "@mui/icons-material";

export function ProductsPage() {
    return (
        <Stack>
            <AppCard
                icon={FolderOutlined}
                color={'success.dark'}
                variant={'combine'}
                title={'Products'}
                subheader={'List of products for sale'}
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

ProductsPage.propTypes = {};