import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";

export function MenuItem(props) {

    const {
        icon,
        title
    } = props

    const IconMenuItem = icon;

    return (
        <ListItemButton selected={true}>
            <ListItemIcon>
                <IconMenuItem/>
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItemButton>
    )
}

MenuItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};