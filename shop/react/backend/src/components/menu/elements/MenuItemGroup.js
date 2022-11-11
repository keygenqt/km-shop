import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import * as React from "react";
import PropTypes from "prop-types";

export function MenuItemGroup(props) {

    const {
        icon,
        group,
        children = []
    } = props

    const [open, setOpen] = React.useState(false);

    const IconMenuItemGroup = icon;

    const listChildren = []

    children.forEach((item, index) => {

        const IconSubItemGroup = item.icon;

        listChildren.push((
            <ListItemButton key={`sub-item-menu-${index}`} sx={{pl: 4}}>
                <ListItemIcon>
                    <IconSubItemGroup/>
                </ListItemIcon>
                <ListItemText primary={item.title}/>
            </ListItemButton>
        ))
    })


    return (
        <>
            <ListItemButton onClick={() => {
                setOpen(!open);
            }}>
                <ListItemIcon>
                    <IconMenuItemGroup/>
                </ListItemIcon>
                <ListItemText primary={group}/>
                {open ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {listChildren}
                </List>
            </Collapse>
        </>
    )
}

MenuItemGroup.propTypes = {
    icon: PropTypes.object.isRequired,
    group: PropTypes.string.isRequired,
};