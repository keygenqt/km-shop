import {AppMenu, AppToolbar, BaseLayout} from "../index";
import {MenuConf} from "../../conf/menu/MenuConf";
import * as React from "react";
import PropTypes from "prop-types";
import {Stack} from "@mui/material";

/**
 * Application layout unifying element
 */
export function AppLayout(props) {
    return (
        <BaseLayout
            menu={(
                <Stack>
                    <AppMenu configuration={MenuConf}/>
                </Stack>
            )}
            toolbar={AppToolbar}
        >
            {props.children}
        </BaseLayout>
    );
}

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
};