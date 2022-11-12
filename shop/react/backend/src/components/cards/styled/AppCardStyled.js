import {Card, styled} from "@mui/material";

export const AppCardStyled = styled(Card)(() => ({
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    '& .MuiCardHeader-root, & .MuiCardContent-root': {
        position: 'relative',
        zIndex: 1
    },
    '&.circles': {
        '&:before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            top: '-76px',
            right: '27px',
            opacity: 0.5
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '210px',
            height: '210px',
            top: '-100px',
            right: '-95px',
        }
    },
    '&.lines': {
        '&:before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            bottom: '-120px',
            right: '-45px',
            backgroundColor: 'transparent',
            borderWidth: '3px',
            borderStyle: 'solid',
            opacity: 0.7
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            bottom: '-95px',
            right: '-125px',
            opacity: 0.7,
            borderWidth: '10px',
            borderStyle: 'solid',
            backgroundColor: 'transparent',
        }
    },
    '&.combine': {
        '&:before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            bottom: '-128px',
            left: '-83px',
            backgroundColor: 'transparent',
            borderWidth: '5px',
            borderStyle: 'solid',
            opacity: '0.7'
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            top: '-92px',
            right: '-56px',
            opacity: '0.4'
        }
    }
}));