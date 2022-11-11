import * as React from 'react';
import {Avatar, Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../base";

/**
 * Application toolbar actions elements
 */
export function AppToolbar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            sx={{width: '100%'}}
        >
            <Stack direction="row" spacing={1} alignItems="flex-start">
                <Typography variant="h5" component="div">
                    <Box component="span" sx={{
                        color: 'secondary.main'
                    }}>Sh</Box>op
                </Typography>
                <Typography variant="caption" sx={{paddingTop: '3px'}}>
                    Admin Panel
                </Typography>
            </Stack>

            <Avatar
                alt="Remy Sharp"
                sx={{width: 30, height: 30}}
                src={ConstantImages.common.default_user_avatar}
            />
        </Stack>
    );
}

AppToolbar.propTypes = {};