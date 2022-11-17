import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

/**
 * Application toolbar label
 */
export function LabelToolbar() {
    return (
        <Stack
            direction="row"
            spacing={1}
            alignItems="flex-start"
        >
            <Typography variant="h4" component="div">
                <Box component="span" sx={{
                    color: 'secondary.main'
                }}>Sh</Box>op
            </Typography>
            <Typography variant="caption" sx={{paddingTop: '3px'}}>
                Admin Panel
            </Typography>
        </Stack>
    );
}

LabelToolbar.propTypes = {};