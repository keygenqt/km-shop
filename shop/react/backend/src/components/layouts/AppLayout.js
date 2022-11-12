import {AppMenu, AppToolbar, BaseLayout} from "../index";
import {MenuConf} from "../../conf/menu/MenuConf";
import * as React from "react";
import PropTypes from "prop-types";

/**
 * Application layout unifying element
 */
export function AppLayout(props) {
    return (
        <BaseLayout
            menu={<AppMenu configuration={MenuConf}/>}
            toolbar={AppToolbar}
        >
            {props.children}
        </BaseLayout>
    );
}

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
};