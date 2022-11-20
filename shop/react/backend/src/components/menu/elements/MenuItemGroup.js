import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import * as React from "react";
import {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {NavigateContext} from "../../../base";

export function MenuItemGroup(props) {

    const {route} = useContext(NavigateContext)

    const {
        icon,
        group,
        children = []
    } = props

    const listChildren = []

    const IconMenuItemGroup = icon;

    const selected = !!children.find(it => it.selected === true)

    const [open, setOpen] = React.useState(selected);

    useEffect(() => {
        if (selected) {
            setOpen(selected)
        }
    }, [selected])

    children.forEach((item, index) => {

        if (item.type === 'driver') {
            listChildren.push(
                <Divider
                    key={`children-item-driver-${index}`}
                    sx={{my: 1, ml: 4}}
                />
            )
        } else {
            const IconSubItemGroup = item.icon;

            listChildren.push(
                <ListItemButton
                    disabled={item.disabled}
                    className={'MuiCollapse'}
                    selected={item.selected}
                    key={`sub-item-menu-${index}`}
                    sx={{ml: 4}}
                    onClick={() => {
                        if (item.link) {
                            route.toLocationDelay(item.link)
                        }
                    }}
                >
                    <ListItemIcon sx={{
                        marginRight: '-10px'
                    }}>
                        <IconSubItemGroup/>
                    </ListItemIcon>
                    <ListItemText primary={item.title}/>
                </ListItemButton>
            )
        }
    })

    return (
        <>
            <ListItemButton className={selected ? 'Mui-selected' : ''} onClick={() => {
                setOpen(!open);
            }}>
                <ListItemIcon sx={{
                    marginRight: '-10px'
                }}>
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