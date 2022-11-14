import {List, styled} from "@mui/material";

export const AppMenuStyled = styled(List)(({theme}) => ({
    width: '100%',
    '& .MuiListItemButton-root': {
        borderRadius: 10,
    },
    '& .Mui-selected:not(.MuiCollapse), & .Mui-selected:hover:not(.MuiCollapse)': {
        backgroundColor: theme.palette.secondary.light + " !important",
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.dark,
        },
    },
    '& .Mui-selected.MuiCollapse': {
        backgroundColor: "transparent",
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.dark,
        },
    },
    '& .Mui-selected.Mui-disabled': {
        opacity: 1
    },
}));