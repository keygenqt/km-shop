import * as React from 'react';
import {Stack} from "@mui/material";
import {LabelToolbar} from "./elements/LabelToolbar";
import {SettingsToolbar} from "./elements/SettingsToolbar";
import PropTypes from "prop-types";

/**
 * Application toolbar content body
 */
export function AppToolbar(props) {

    const {
        disabled = false
    } = props

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{width: '100%'}}
        >
            <LabelToolbar/>
            <SettingsToolbar
                disabled={disabled}
            />
        </Stack>
    );
}

AppToolbar.propTypes = {
    disabled: PropTypes.bool,
};