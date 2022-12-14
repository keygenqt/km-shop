import {styled} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

export const AppDataGridStyled = styled(DataGrid)(({theme}) => ({
    '& .MuiDataGrid-columnHeaders .MuiDataGrid-columnSeparator': {
        display: 'none'
    },
    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
        outline: 'none'
    },
    '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
        outline: 'none'
    },
    '& .MuiDataGrid-virtualScrollerRenderZone': {
        width: '100%'
    },
    '& .MuiDataGrid-row': {
        width: '100%'
    },
    '& .MuiDataGrid-columnHeaders': {
        width: '100%',
        backgroundColor: theme.palette.grey.A200
    },
    '& .MuiDataGrid-columnHeadersInner': {
        width: '100%'
    },
    '& .MuiDataGrid-columnHeadersInner > div': {
        width: '100%'
    },
    '& .MuiDataGrid-virtualScroller': {
        overflow: 'auto !important'
    },
    '& .MuiDataGrid-virtualScrollerRenderZone .MuiDataGrid-cell:not([role="cell"]):last-child': {
        display: 'none'
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: 'inherit'
    },
    '& .MuiDataGrid-fullWith': {
        width: '100% !important',
        minWidth: '200px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With95': {
        width: '95px !important',
        minWidth: '95px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With90': {
        width: '90px !important',
        minWidth: '90px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With85': {
        width: '85px !important',
        minWidth: '85px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With80': {
        width: '80px !important',
        minWidth: '80px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With75': {
        width: '75px !important',
        minWidth: '75px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With70': {
        width: '70px !important',
        minWidth: '70px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With65': {
        width: '65px !important',
        minWidth: '65px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With60': {
        width: '60px !important',
        minWidth: '60px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With55': {
        width: '55px !important',
        minWidth: '55px !important',
        maxWidth: 'inherit !important'
    },
    '& .MuiDataGrid-With50': {
        width: '50px !important',
        minWidth: '50px !important',
        maxWidth: 'inherit !important'
    },
}));