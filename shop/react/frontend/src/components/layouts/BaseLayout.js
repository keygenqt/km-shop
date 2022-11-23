import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Stack} from "@mui/material";
import {AppToolbar} from "../toolbar/AppToolbar";
import {AppFooter} from "../footer/AppFooter";
import {ContainerLG, ContainerXL} from "../containers/styled/Containers";

/**
 * Layout base for app
 */
export function BaseLayout(props) {
    return (
        <Box className={'custom-scroll'} sx={{
            height: '100%'
        }}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={7}
            >
                <ContainerLG>
                    <AppToolbar/>
                </ContainerLG>

                <ContainerXL>
                    {props.children}
                </ContainerXL>

                <ContainerLG>
                    <AppFooter/>
                </ContainerLG>
            </Stack>
        </Box>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
};