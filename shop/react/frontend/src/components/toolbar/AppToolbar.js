import * as React from 'react';
import {useContext} from 'react';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import PropTypes from "prop-types";
import {
    ContactSupportOutlined,
    KeyboardArrowUpOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {CartToolbar} from "./elements/CartToolbar";
import {CollectionsToolbar} from "./elements/CollectionsToolbar";
import {ConstantImages, ConstantStorage, NavigateContext, useLocalStorage} from "../../base";
import {ValueType} from "../../base/route/ValueType";

/**
 * Application toolbar
 */
export function AppToolbar() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const {route, routes} = useContext(NavigateContext)

    const cartProducts = useLocalStorage(ConstantStorage.cart, ValueType.array, []);
    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const [anchorCart, setAnchorCart] = React.useState(null);
    const [anchorCollections, setAnchorCollections] = React.useState(null);

    return (
        <>
            <CartToolbar
                rows={cartProducts}
                anchor={anchorCart}
                onClose={() => setAnchorCart(null)}
            />

            <CollectionsToolbar
                anchor={anchorCollections}
                onClose={() => setAnchorCollections(null)}
            />

            <Box sx={{flexGrow: 1}}>
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        backgroundColor: '#37a7ff',
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
                            spacing={isSM ? 1 : 2}
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <Button
                                sx={{
                                    p: 0,
                                    minWidth: 0,
                                    borderRadius: 2
                                }}
                                onClick={() => {
                                    route.toLocation(routes.home)
                                }}
                            >
                                <Avatar
                                    src={ConstantImages.common.logo}
                                    sx={{
                                        borderRadius: 2,
                                    }}
                                />
                            </Button>

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
                                endIcon={isSM ? null : <SearchOutlined/>}
                                onClick={() => {
                                    route.toLocation(routes.exploring)
                                }}
                            >
                                Exploring
                            </Button>

                            {!isSM && collectionsCache.length > 0 ? (
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
                            ) : null}

                        </Stack>

                        <Stack
                            direction={'row'}
                            spacing={isSM ? 1 : 2}
                        >
                            <IconButton
                                disabled={route.isPage(routes.contact)}
                                size={isSM ? 'small' : 'large'}
                                edge="start"
                                color="inherit"
                                aria-label="contact"
                                onClick={() => {
                                    route.toLocation(routes.contact)
                                }}
                            >
                                <ContactSupportOutlined/>
                            </IconButton>

                            <Badge
                                badgeContent={cartProducts.length}
                                color="primary"
                                sx={{
                                    '.MuiBadge-badge': {
                                        top: 3,
                                        right: 3
                                    }
                                }}
                            >
                                <IconButton
                                    disabled={route.isPage(routes.cart) || cartProducts.length === 0}
                                    size={isSM ? 'small' : 'large'}
                                    edge="start"
                                    color="inherit"
                                    aria-label="cart"
                                    onClick={(event) => {
                                        if (isSM) {
                                            route.toLocation(routes.cart)
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