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
}));