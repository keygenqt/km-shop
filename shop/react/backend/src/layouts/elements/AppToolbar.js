import * as React from 'react';
import {Avatar, Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../base";

export function AppToolbar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            sx={{width: '100%'}}
        >
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                <Box component="span" sx={{
                    color: 'primary.main'
                }}>Ad</Box>minka
            </Typography>

            <Avatar
                alt="Remy Sharp"
                sx={{width: 30, height: 30}}
                src={ConstantImages.common.default_user_avatar}
            />
        </Stack>
    );
}

AppToolbar.propTypes = {};