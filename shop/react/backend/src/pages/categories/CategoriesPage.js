import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {CategoryOutlined} from "@mui/icons-material";

export function CategoriesPage() {
    return (
        <Stack>
            <AppCard
                icon={CategoryOutlined}
                color={'success.dark'}
                variant={'combine'}
                title={'Categories'}
                subheader={'List of product categories'}
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

CategoriesPage.propTypes = {};