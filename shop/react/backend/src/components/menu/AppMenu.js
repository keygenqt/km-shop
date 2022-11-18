import * as React from 'react';
import {useContext} from 'react';
import PropTypes from "prop-types";
import {NavigateContext} from "../../base";
import {AppMenuStyled} from "./styled/AppMenuStyled";
import {MenuItemGroup} from "./elements/MenuItemGroup";
import {MenuItem} from "./elements/MenuItem";
import {MenuDriver} from "./elements/MenuDriver";

/**
 * Application menu admin panel
 */
export function AppMenu(props) {

    const {
        configuration = []
    } = props

    const {route} = useContext(NavigateContext)

    const listElements = []

    configuration.map((item) => {
        if (item.links) {
            item["disabled"] = route.isPage(item.link)
            item["selected"] = route.isPages(item.links)
        }
        if (item.children) {
            item.children.map((item) => {
                if (item.links) {
                    item["disabled"] = route.isPage(item.link)
                    item["selected"] = route.isPages(item.links)
                }
                return item
            })
        }
        return item
    })

    configuration.forEach((item, index) => {
        if (item.type === 'driver') {
            listElements.push(
                <MenuDriver
                    title={item.title}
                    key={`menu-item-driver-${index}`}
                />
            )
        } else {
            listElements.push(item.group ? (
                <MenuItemGroup
                    icon={item.icon}
                    group={item.group}
                    children={item.children}
                    key={`menu-item-group-${index}`}
                />
            ) : (
                <MenuItem
                    link={item.link}
                    icon={item.icon}
                    title={item.title}
                    disabled={item.disabled === true}
                    selected={item.selected === true}
                    key={`menu-item-${index}`}
                />
            ))
        }
    })

    return (
        <AppMenuStyled>
            {listElements}
        </AppMenuStyled>
    );
}

AppMenu.propTypes = {
    configuration: PropTypes.array.isRequired,
};

