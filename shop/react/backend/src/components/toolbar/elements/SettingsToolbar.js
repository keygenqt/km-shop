import {
    Avatar,
    ClickAwayListener,
    Divider,
    Fade,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popper,
    Stack
} from "@mui/material";
import * as React from "react";
import {useContext, useEffect} from "react";
import {AppCache, ConstantImages, ConstantStorage, NavigateContext, useWindowResize} from "../../../base";
import {ChipSettingsStyled} from "../styled/ChipSettingsStyled";
import {ExitToAppOutlined, SettingsOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";
import {AppCard} from "../../cards/AppCard";
import Typography from "@mui/material/Typography";

export function SettingsToolbar(props) {

    const {
        disabled = false
    } = props

    const sizeWindow = useWindowResize()
    const {route, routes} = useContext(NavigateContext)

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        setOpen(false)
    }, [sizeWindow])

    return (
        <>
            <ChipSettingsStyled
                className={open ? 'Mui-selected' : ''}
                disabled={disabled}
                avatar={<Avatar sx={{paddingLeft: 1}} src={ConstantImages.common.default_user_avatar}/>}
                label={<SettingsOutlined sx={{width: 18}}/>}
                variant="outlined"
                onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                    event.stopPropagation();
                    setOpen((previousOpen) => !previousOpen);
                }}
            />

            <ClickAwayListener onClickAway={() => {
                setOpen(false);
            }}>
                <Popper
                    id={'transition-popper'}
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    disablePortal
                    placement="bottom-end"
                    role={undefined}
                    sx={{
                        zIndex: 999
                    }}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 10]
                                }
                            }
                        ]
                    }}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Stack sx={{
                                zIndex: 999,
                                backgroundColor: 'background.default'
                            }}>
                                <AppCard
                                    shadow
                                    title={'Good Morning!'}
                                    subheader={AppCache.stringGet(ConstantStorage.userEmail)}
                                >
                                    <Stack spacing={1}>
                                        <Divider/>
                                        <List
                                            sx={{
                                                width: '250px',
                                                '& .MuiListItemButton-root': {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        >
                                            <ListItemButton onClick={() => {
                                                // save email user
                                                AppCache.stringSet(ConstantStorage.userEmail, null)

                                                // reload page
                                                route.toRefreshState(routes.login)

                                                // clear cache
                                                AppCache.clearAll()
                                            }}>
                                                <ListItemIcon sx={{
                                                    marginRight: '-10px'
                                                }}>
                                                    <ExitToAppOutlined/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body2">Logout</Typography>}/>
                                            </ListItemButton>
                                        </List>
                                    </Stack>
                                </AppCard>
                            </Stack>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>
        </>
    );
}

SettingsToolbar.propTypes = {
    disabled: PropTypes.bool,
};