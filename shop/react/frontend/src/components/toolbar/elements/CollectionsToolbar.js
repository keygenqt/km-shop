import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Button, ClickAwayListener, Fade, Paper, Popper, Stack} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {ConstantStorage, NavigateContext, useLocalStorage} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";
import {GenericIcon} from "../../other/GenericIcon";

/**
 * Application Categories toolbar
 */
export function CollectionsToolbar(props) {

    const {
        anchor,
        onClose,
    } = props

    const {route, routes} = useContext(NavigateContext)
    const [anchorValue, setAnchorValue] = React.useState(anchor);

    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const items = []

    collectionsCache.forEach((collection) => {
        items.push((
            <React.Fragment
                key={`group-menu-item-${collection.id}`}
            >
                <Button
                    color={'inherit'}
                    fullWidth
                    sx={{
                        borderRadius: 2
                    }}
                    onClick={() => {
                        onClose()
                        route.toLocation(routes.exploringCollection, collection.key)
                    }}
                >
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'flex-start'}
                        sx={{
                            width: '100%'
                        }}
                    >
                        <Box sx={{
                            p: 2,
                            backgroundColor: 'secondary.light',
                            borderRadius: '50%',
                            fontSize: 0,
                            '& .MuiSvgIcon-root': {
                                letterSpacing: 0,
                                color: 'secondary.main'
                            }
                        }}>
                            <GenericIcon iconName={collection.icon}/>
                        </Box>

                        <Stack
                            spacing={0.5}
                            justifyContent={'center'}
                            alignItems={'flex-start'}
                            sx={{minHeight: 56}}
                        >
                            <Typography variant={'h5'}>
                                {collection.name}
                            </Typography>
                            <Typography variant={'caption'} sx={{
                                textTransform: 'none'
                            }}>
                                {collection.desc}
                            </Typography>
                        </Stack>

                    </Stack>
                </Button>
            </React.Fragment>
        ));
    })

    useEffect(() => {
        if (anchor) setAnchorValue(anchor)
    }, [anchor, anchorValue])

    return (
        anchorValue ? (
            <ClickAwayListener onClickAway={() => {
                onClose();
            }}>
                <Popper
                    id={'ValueToolbar'}
                    open={Boolean(anchor)}
                    anchorEl={anchorValue}
                    transition
                    disablePortal
                    placement="bottom"
                    role={undefined}
                    sx={{
                        zIndex: 999
                    }}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 5]
                                }
                            }
                        ]
                    }}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper elevation={1} sx={{
                                zIndex: 999,
                                pt: 1,
                                borderRadius: 2,
                                maxWidth: 400,
                                minWidth: 300,
                                overflow: 'hidden'
                            }}>
                                <Stack
                                    alignItems={'flex-start'}
                                    sx={{position: 'relative'}}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        height: 8,
                                        top: 8,
                                        left: 0,
                                        right: 16,
                                        zIndex: 1,
                                        background: 'linear-gradient(0deg, transparent 0%, white 100%)'
                                    }}/>

                                    <Stack spacing={1} className={'custom-scroll'} sx={{
                                        width: '100%',
                                        maxHeight: 500,
                                        paddingX: 2,
                                        marginTop: 1,
                                        pt: 1,
                                        pb: 2.5,
                                        position: 'relative',
                                        boxSizing: 'border-box',
                                    }}>
                                        {items}
                                    </Stack>

                                    <Stack
                                        spacing={2}
                                        sx={{
                                            backgroundColor: '#F9FAFB',
                                            width: '100%',
                                            position: 'relative',
                                            paddingX: 4,
                                            paddingY: 3,
                                            boxSizing: 'border-box',
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                height: 12,
                                                backgroundColor: 'red',
                                                top: -12,
                                                left: 0,
                                                right: 16,
                                                zIndex: 1,
                                                background: 'linear-gradient(0deg, white 0%, transparent 100%)'
                                            }
                                        }}
                                    >
                                        <Stack spacing={1}>
                                            <Typography variant='h5'>
                                                Перейти с фильтром
                                            </Typography>
                                            <Typography variant='caption'>
                                                Ищите то, что вам нужно и понравится.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>
        ) : null
    );
}

CollectionsToolbar.propTypes = {
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};