import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import PropTypes from "prop-types";
import {NavigateContext} from "../../../base";

export function MenuItem(props) {

    const {route} = useContext(NavigateContext)

    const {
        link,
        icon,
        title,
        selected,
        disabled,
    } = props

    const IconMenuItem = icon;

    return (
        <ListItemButton
            disabled={disabled}
            selected={selected}
            onClick={() => {
                route.toLocationDelay(link)
            }}
        >
            <ListItemIcon sx={{
                marginRight: '-10px'
            }}>
                <IconMenuItem/>
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItemButton>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};