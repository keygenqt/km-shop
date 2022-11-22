import * as React from 'react';
import {Box, Container, Stack} from "@mui/material";
import {FirstBlockHomePage} from "./elements/FirstBlockHomePage";
import {StepsBlockHomePage} from "./elements/StepsBlockHomePage";
import {CategoriesBlockHomePage} from "./elements/CategoriesBlockHomePage";

export function HomePage() {
    return (
        <Box>
            <Container maxWidth={"xl"} sx={{
                paddingY: 10
            }}>
                <FirstBlockHomePage/>
            </Container>

            <Container maxWidth={"lg"} sx={{
                paddingBottom: 10
            }}>
                <StepsBlockHomePage/>
            </Container>

            <Container maxWidth={"xl"} sx={{
                paddingBottom: 10
            }}>
                <CategoriesBlockHomePage/>
            </Container>
        </Box>
    );
}

HomePage.propTypes = {};