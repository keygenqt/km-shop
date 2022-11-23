import * as React from 'react';
import {AppBar, Badge, Box, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {ShoppingCartOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {CartToolbar} from "./elements/CartToolbar";

/**
 * Application toolbar
 */
export function AppToolbar(props) {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorCart, setAnchorCart] = React.useState(null);

    return (
        <>
            <CartToolbar
                anchor={anchorCart}
                onClose={() => setAnchorCart(null)}
            />

            <Box sx={{flexGrow: 1}}>
                <AppBar
                    color={'secondary'}
                    position="static"
                    elevation={0}
                    sx={{
                        color: 'white',
                        borderBottomRightRadius: 16,
                        borderBottomLeftRadius: 16,
                    }}
                >
                    <Toolbar sx={{
                        height: 80
                    }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: '400'
                            }}
                        >
                            Shop
                            <Box component={'span'} sx={{
                                color: 'secondary.dark',
                                ml: 1,
                                fontWeight: '100'
                            }}>
                                6 in 1
                            </Box>
                        </Typography>

                        <Badge
                            badgeContent={10}
                            color="primary"
                            sx={{
                                '.MuiBadge-badge': {
                                    top: 3,
                                    right: 3
                                }
                            }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={(event) => {
                                    if (isSM) {
                                        console.log('open cart')
                                    } else {
                                        if (!anchorCart) {
                                            event.stopPropagation();
                                            setAnchorCart(event.currentTarget);
                                        } else {
                                            setAnchorCart(null)
                                        }
                                    }
                                }}
                            >
                                <ShoppingCartOutlined/>
                            </IconButton>
                        </Badge>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

AppToolbar.propTypes = {
    disabled: PropTypes.bool,
};