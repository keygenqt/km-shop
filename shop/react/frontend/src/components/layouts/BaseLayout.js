import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Container} from "@mui/material";
import {AppToolbar} from "../toolbar/AppToolbar";

/**
 * Layout base for app
 */
export function BaseLayout(props) {
    return (
        <Box className={'custom-scroll'} sx={{
            height: '100%'
        }}>
            <Container
                maxWidth={"lg"}
                className={'content'}
            >
                <AppToolbar/>
                {props.children}
            </Container>
        </Box>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
};