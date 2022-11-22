import * as React from 'react';
import {AppBar, Badge, Box, IconButton, Toolbar} from "@mui/material";
import PropTypes from "prop-types";
import {ShoppingCartOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

/**
 * Application toolbar
 */
export function AppToolbar(props) {
    return (
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
                            color: 'primary.dark',
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
                        >
                            <ShoppingCartOutlined/>
                        </IconButton>
                    </Badge>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

AppToolbar.propTypes = {
    disabled: PropTypes.bool,
};