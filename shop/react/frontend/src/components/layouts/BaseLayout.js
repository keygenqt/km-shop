import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Container, Stack} from "@mui/material";
import {AppToolbar} from "../toolbar/AppToolbar";
import {AppFooter} from "../footer/AppFooter";

/**
 * Layout base for app
 */
export function BaseLayout(props) {
    return (
        <Box className={'custom-scroll'} sx={{
            height: '100%'
        }}>
            <Stack>
                <Container maxWidth={"lg"}>
                    <AppToolbar/>
                </Container>

                {props.children}

                <AppFooter/>
            </Stack>
        </Box>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
};