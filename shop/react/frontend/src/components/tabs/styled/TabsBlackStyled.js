import {Tabs, styled} from "@mui/material";

export const TabsBlackStyled = styled(Tabs)(({theme}) => ({
    padding: '5px',
    minHeight: 'inherit',
    backgroundColor: 'white',
    borderRadius: '30px',
    '& .Mui-selected': {
        color: 'white !important',
        transitionDuration: '500ms'
    },
    '& .MuiTabs-flexContainer': {
        position: 'relative',
        zIndex: 1,
    },
    '& .MuiButtonBase-root': {
        padding: '9px 24px',
        minHeight: 'inherit',
        borderRadius: '30px',
        transitionDuration: '500ms',
        textTransform: 'none',
    },
    '& .MuiTabs-indicator': {
        height: '100%',
        backgroundColor: theme.palette.black.main,
        borderRadius: '30px',
        transitionDuration: '500ms'
    },
    '& .Mui-selected .MuiTouchRipple-root': {
        opacity: 0,
        transitionDuration: '200ms'
    },
    ['@media(max-width: '+ theme.breakpoints.values.md + 'px)']: {
        width: '100%',
        maxWidth: 350,
        '& .MuiTabs-flexContainer': {
            display: 'grid',
        },
        '& .MuiTabs-indicator': {
            display: 'none'
        },
        '& .Mui-selected': {
            color: theme.palette.primary.main + '!important',
        },
        '& .MuiButtonBase-root': {
            backgroundColor: theme.palette.primary.light + '!important',
            marginBottom: 5
        },
        '& .MuiButtonBase-root:last-child': {
            marginBottom: 0
        },
        '& .Mui-selected .MuiTouchRipple-root': {
            opacity: 'inherit'
        },
    }
}));