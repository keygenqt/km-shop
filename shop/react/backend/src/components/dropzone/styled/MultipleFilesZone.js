import {Box, styled} from "@mui/material";

export const MultipleFilesZone = styled(Box)(({theme}) => ({
    position: 'relative',
    textAlign: 'center',
    padding: '30px 10px 30px 10px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    background: '#0000000f',
    border: '1px dotted ' + theme.palette.primary.main,
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -1,
        margin: '0 auto',
        left: 0,
        right: 0,
        width: '100%',
        borderBottom: '2px solid ' + theme.palette.primary.main
    },
    '&.FilesZone-Disable': {
        color: '#00000061',
        background: '#E0E0E0'
    },
    '&.FilesZone-Disable:after': {
        display: 'none'
    },
    '&.FilesZone-Error': {
        color: theme.palette.error.main,
        border: '1px dotted ' + theme.palette.error.main,
    },
    '&.FilesZone-Error:after': {
        borderBottom: '2px solid ' + theme.palette.error.main
    }
}));