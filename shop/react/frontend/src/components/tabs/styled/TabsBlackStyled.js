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
    }
}));