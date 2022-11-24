import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Container, Stack} from "@mui/material";
import {AppToolbar} from "../toolbar/AppToolbar";
import {AppFooter} from "../footer/AppFooter";
import {ContainerLG} from "../containers/styled/Containers";

/**
 * Layout base for app
 */
export function BaseLayout(props) {

    const {
        size = 'lg',
        middle = false
    } = props

    return (
        <Box id={'page-scroll'} className={'custom-scroll'} sx={{
            height: '100%'
        }}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={7}
                sx={{minHeight: '100%'}}
            >
                <ContainerLG>
                    <AppToolbar/>
                </ContainerLG>

                <Container maxWidth={size} sx={{
                    flexGrow: middle ? null : 1,
                }}>
                    {props.children}
                </Container>

                <ContainerLG>
                    <AppFooter/>
                </ContainerLG>
            </Stack>
        </Box>
    )
}

BaseLayout.propTypes = {
    size: PropTypes.string,
    middle: PropTypes.bool,
    children: PropTypes.element.isRequired
};