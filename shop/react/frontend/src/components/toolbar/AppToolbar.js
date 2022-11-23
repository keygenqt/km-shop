import * as React from 'react';
import {AppBar, Badge, Box, Button, Divider, IconButton, Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {
    ConnectWithoutContactOutlined, ContactSupportOutlined,
    KeyboardArrowUpOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {CartToolbar} from "./elements/CartToolbar";
import {CollectionsToolbar} from "./elements/CollectionsToolbar";

/**
 * Application toolbar
 */
export function AppToolbar(props) {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorCart, setAnchorCart] = React.useState(null);
    const [anchorCollections, setAnchorCollections] = React.useState(null);

    return (
        <>
            <CartToolbar
                anchor={anchorCart}
                onClose={() => setAnchorCart(null)}
            />

            <CollectionsToolbar
                anchor={anchorCollections}
                onClose={() => setAnchorCollections(null)}
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
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={2}
                            sx={{
                                flexGrow: 1,
                            }}
                        >

                            <a href={'/'} style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{fontWeight: '500'}}
                                >
                                    Shop
                                    <Box component={'span'} sx={{
                                        color: 'secondary.dark',
                                        ml: 1,
                                        fontWeight: '600'
                                    }}>
                                        6 in 1
                                    </Box>
                                </Typography>
                            </a>

                            <Divider
                                orientation="vertical"
                                flexItem
                                color={'white'}
                            />

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 17,
                                    color: 'white',
                                    fontWeight: 100,
                                }}
                                endIcon={<SearchOutlined/>}
                                onClick={() => {

                                }}
                            >
                                Exploring
                            </Button>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 17,
                                    color: 'white',
                                    fontWeight: 100
                                }}
                                endIcon={<KeyboardArrowUpOutlined sx={{
                                    transform: anchorCollections ? 'rotate(0deg)' : 'rotate(180deg)',
                                    transitionProperty: 'transform',
                                    transitionTimingFunction: 'ease-in-out',
                                    transitionDuration: '300ms'
                                }}/>}
                                onClick={(event) => {
                                    if (!anchorCollections) {
                                        event.stopPropagation();
                                        setAnchorCollections(event.currentTarget);
                                        setAnchorCart(null)
                                    } else {
                                        setAnchorCollections(null)
                                    }
                                }}
                            >
                                Collections
                            </Button>
                        </Stack>

                        <Stack
                            direction={'row'}
                            spacing={2}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="contact"
                                onClick={(event) => {

                                }}
                            >
                                <ContactSupportOutlined/>
                            </IconButton>

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
                                    aria-label="cart"
                                    onClick={(event) => {
                                        if (isSM) {
                                            console.log('open cart')
                                        } else {
                                            if (!anchorCart) {
                                                event.stopPropagation();
                                                setAnchorCart(event.currentTarget);
                                                setAnchorCollections(null)
                                            } else {
                                                setAnchorCart(null)
                                            }
                                        }
                                    }}
                                >
                                    <ShoppingCartOutlined/>
                                </IconButton>
                            </Badge>
                        </Stack>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

AppToolbar.propTypes = {
    disabled: PropTypes.bool,
};