import * as React from 'react';
import {useContext} from 'react';
import PropTypes from "prop-types";
import {NavigateContext} from "../../base";
import {StyledMenuList} from "./styled/StyledMenuList";
import {MenuItemGroup} from "./elements/MenuItemGroup";
import {MenuItem} from "./elements/MenuItem";

/**
 * Application menu admin panel
 */
export function AppMenu(props) {

    const {
        configuration = []
    } = props

    const {route, routes} = useContext(NavigateContext)

    const listElements = []

    configuration.forEach((item, index) => {
        listElements.push(item.group ? (
            <MenuItemGroup
                icon={item.icon}
                group={item.group}
                children={item.children}
                key={`menu-item-group-${index}`}
            />
        ) : (
            <MenuItem
                icon={item.icon}
                title={item.title}
                key={`menu-item-${index}`}
            />
        ))
    })

    return (
        <StyledMenuList>
            {listElements}
        </StyledMenuList>
    );
}

AppMenu.propTypes = {
    configuration: PropTypes.array.isRequired,
};

