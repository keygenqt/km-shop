import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from "prop-types";
import {AppBar, Box, IconButton, Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {ConstantImages, useWindowResize} from "../../base";
import {Menu} from "@mui/icons-material";
import {useLocation} from "react-router-dom";

/**
 * Layout dividing the page into toolbar, menu, page
 */
export function BaseLayout(props) {

    const {
        menu,
        toolbar,
    } = props

    const theme = useTheme()
    const sizeWindow = useWindowResize()
    const location = useLocation();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const ToolbarContent = toolbar
    const hideMenu = theme.breakpoints.values.lg
    const menuWith = 300
    const barHeight = 64

    const [isOpenMenu, setIsOpenMenu] = React.useState(sizeWindow.width > hideMenu);

    useEffect(() => {
        setIsOpenMenu(sizeWindow.width > hideMenu)
    }, [hideMenu, isMD, sizeWindow])

    useEffect(() => {
        if (isMD) {
            setIsOpenMenu(false)
        }
    }, [isMD, location])

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
                    zIndex: 3
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
                            setIsOpenMenu(!isOpenMenu)
                        }}
                    >
                        <Menu/>
                    </IconButton>

                    <ToolbarContent
                        disabled={isMD && isOpenMenu}
                    />

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
                    zIndex: isMD ? 3 : 0,
                    transitionProperty: 'left',
                    transitionDuration: '300ms',
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
                        zIndex: 2
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

BaseLayout.propTypes = {
    toolbar: PropTypes.func.isRequired,
    menu: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
};