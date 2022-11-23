import {Container, styled} from "@mui/material";

export const ContainerXL = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.xl}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));

export const ContainerLG = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.lg}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));

export const ContainerMD = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.md}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));

export const ContainerSM = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.sm}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));

export const ContainerXS = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.xs}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));

export const ContainerMIN = styled(Container)(({theme}) => ({
    maxWidth: `${theme.breakpoints.values.min}px !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
}));