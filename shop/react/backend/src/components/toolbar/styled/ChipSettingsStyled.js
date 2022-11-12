import {Chip, styled} from "@mui/material";

export const ChipSettingsStyled = styled(Chip)(({theme}) => ({
    alignItems: 'center',
    height: '40px',
    borderRadius: '27px',
    border: 'none',
    backgroundColor: theme.palette.secondary.light,
    '& svg': {
        color: theme.palette.secondary.main,
        transition: 'all .2s ease-in-out',
    },
    '&:hover, &.Mui-selected': {
        borderColor: theme.palette.secondary.main,
        background: `${theme.palette.secondary.dark} !important`,
        '& svg': {
            color: theme.palette.secondary.light,
        },
    },
    '&.Mui-disabled': {
        opacity: 1,
        '& .MuiAvatar-root': {
            marginRight: '-11px !important',
        },
        '& svg': {
            display: 'none'
        },
    },
}));