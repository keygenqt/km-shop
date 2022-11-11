import {List, styled} from "@mui/material";

export const StyledMenuList = styled(List)(({theme}) => ({
    width: '100%',
    // selected and (selected + hover) states
    '& .MuiListItemButton-root': {
        borderRadius: 2,
    },
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
        bgcolor: theme.palette.secondary.light,
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.dark,
        },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
        bgcolor: theme.palette.grey.A100,
    },

    '&& .MuiCollapse-root .Mui-selected': {
        bgcolor: 'white',
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.dark,
        },
    },
    '&& .MuiCollapse-root .Mui-selected:hover': {
        bgcolor: theme.palette.grey.A100
    },
}));