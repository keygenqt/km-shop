import * as React from 'react';
import {Stack, useMediaQuery, useTheme} from "@mui/material";
import {FirstBlockHomePage} from "./elements/FirstBlockHomePage";
import {StepsBlockHomePage} from "./elements/StepsBlockHomePage";
import {ContainerLG} from "../../components/containers/styled/Containers";
import {CategoriesBlockHomePage} from "./elements/CategoriesBlockHomePage";
import {MobileBlockHomePage} from "./elements/MobileBlockHomePage";

export function HomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack spacing={isMD ? 7 : 14}>

            <FirstBlockHomePage/>

            <ContainerLG>
                <StepsBlockHomePage/>
            </ContainerLG>

            <CategoriesBlockHomePage/>

            <ContainerLG sx={{
                paddingBottom: isMD ? 0 : 7
            }}>
                <MobileBlockHomePage/>
            </ContainerLG>
        </Stack>
    );
}

HomePage.propTypes = {};