import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from "prop-types";
import {AppBar, Box, IconButton, Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {ConstantImages, useWindowResize} from "../../base";
import {Menu} from "@mui/icons-material";

export function Layout(props) {

    const {
        menu,
        toolbar,
    } = props

    const theme = useTheme()
    const sizeWindow = useWindowResize()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const hideMenu = theme.breakpoints.values.lg
    const menuWith = 300
    const barHeight = 64

    const [isOpenMenu, setIsOpenMenu] = React.useState(sizeWindow.width > hideMenu);
    const [isClickOpen, setIsClickOpen] = React.useState(false);

    useEffect(() => {
        setIsOpenMenu(sizeWindow.width > hideMenu)
    }, [hideMenu, isMD, sizeWindow])

    return (
        <Stack sx={{
            marginTop: 1,
            height: '100%'
        }}>
            <AppBar
                position="static"
                color={'inherit'}
                elevation={0}
                sx={{
                    position: 'relative',
                    zIndex: 1
                }}>
                <Toolbar sx={{
                    paddingX: isMD ? '16px !important' : 'auto',
                    minHeight: '56px !important'
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => {
                            setIsClickOpen(true)
                            setTimeout(() => {
                                setIsClickOpen(false)
                            }, 100)
                            setIsOpenMenu(!isOpenMenu)
                        }}
                    >
                        <Menu/>
                    </IconButton>

                    {toolbar}

                </Toolbar>
            </AppBar>

            <Box sx={{
                height: `calc(100% - ${barHeight}px)`,
                position: 'relative',
            }}>
                <Box sx={{
                    width: menuWith,
                    position: 'absolute',
                    top: 0,
                    left: isOpenMenu ? 0 : `-${menuWith}px`,
                    bottom: 0,
                    backgroundColor: 'background.paper',
                    zIndex: isMD ? 1 : 0,
                    transitionProperty: 'left',
                    transitionDuration: isClickOpen ? '300ms' : '0ms',
                }}>
                    <Box className={'custom-scroll'} sx={{
                        p: 2,
                        paddingRight: 1,
                        height: '100% ',
                        boxSizing: 'border-box',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            right: '-14px',
                            height: 14,
                            width: 14,
                            top: 0,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${ConstantImages.common.corner15})`,
                        }
                    }}>
                        {menu}
                    </Box>
                </Box>
                <Box className={'custom-scroll'} sx={{
                    p: isMD ? 1 : 2,
                    paddingLeft: isOpenMenu ? 1 : isMD ? 1 : 2,
                    paddingTop: 1,
                    height: '100%',
                    width: isOpenMenu && !isMD ? `calc(100% - ${menuWith}px)` : '100%',
                    position: 'relative',
                    transitionDuration: '300ms',
                    transitionProperty: 'left, width, padding',
                    boxSizing: 'border-box',
                    left: isOpenMenu && !isMD ? menuWith : 0,
                }}>
                    <Box sx={{
                        display: isMD && isOpenMenu ? 'block' : 'none',
                        content: '""',
                        position: 'fixed',
                        top: 10,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'black',
                        opacity: isOpenMenu ? 0.5 : 0,
                        transitionDuration: '300ms',
                    }}/>
                    <Box sx={{
                        p: 2,
                        height: '100%',
                        borderRadius: '12px',
                        display: 'inline-table',
                        width: '100%',
                        boxSizing: 'border-box',
                        backgroundColor: 'secondary.light',
                    }}>
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </Stack>

    )
}

Layout.propTypes = {
    menu: PropTypes.element.isRequired,
    toolbar: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
};