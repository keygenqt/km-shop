import {Box, styled} from "@mui/material";

export const MultipleFilesZone = styled(Box)(({theme}) => ({
    position: 'relative',
    textAlign: 'center',
    padding: '30px 10px 30px 10px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    background: '#0000000f',
    borderBottom: '1px dotted transparent',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        margin: '0 auto',
        left: 0,
        right: 0,
        width: '100%',
        height: 1,
        backgroundColor: '#0000006b'
    },
    '&.FilesZone-Disable': {
        color: '#00000061',
        background: '#E0E0E0',
        borderBottom: '1px dotted #0000006b',
    },
    '&.FilesZone-Disable:after': {
        display: 'none'
    },
    '&.FilesZone-Error': {
        color: theme.palette.error.main,
    },
    '&.FilesZone-Error:after': {
        height: 2,
        backgroundColor: theme.palette.error.main
    },
    '&.FilesZone-Active': {
        color: theme.palette.primary.main,
    },
    '&.FilesZone-Active:after': {
        height: 2,
        backgroundColor: theme.palette.primary.main
    },
}));