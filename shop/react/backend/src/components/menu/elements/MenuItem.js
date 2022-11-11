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
    } = props

    const IconMenuItem = icon;

    return (
        <ListItemButton
            disabled={selected}
            selected={selected}
            onClick={() => {
                route.toLocation(link)
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
};