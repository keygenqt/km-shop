import * as React from 'react';
import PropTypes from "prop-types";
import {Stack} from "@mui/material";

/**
 * Layout base for app
 */
export function BaseLayout(props) {
    return (
        <Stack>
            {props.children}
        </Stack>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
};