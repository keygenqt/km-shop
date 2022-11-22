import * as React from 'react';
import {Stack} from "@mui/material";
import {FirstBlockHomePage} from "./elements/FirstBlockHomePage";
import {StepBlockHomePage} from "./elements/StepBlockHomePage";

export function HomePage() {
    return (
        <Stack spacing={10} sx={{
            paddingY: 10
        }}>
            <FirstBlockHomePage/>
            <StepBlockHomePage/>
        </Stack>
    );
}

HomePage.propTypes = {};