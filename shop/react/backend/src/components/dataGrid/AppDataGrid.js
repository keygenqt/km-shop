import * as React from 'react';
import PropTypes from "prop-types";
import {AppDataGridStyled} from "./styled/AppDataGridStyled";

// const gridColumnsClasses = {
//     headerClassName: (params) => {
//         return clsx('MuiDataGrid-custom', {
//             'MuiDataGrid-fullWith': params.colDef.width === undefined,
//         })
//     },
//     cellClassName: (params) => {
//         return clsx('MuiDataGrid-custom', {
//             'MuiDataGrid-fullWith': params.colDef.width === undefined,
//         })
//     },
// }

/**
 * Application Data Grid
 */
export function AppDataGrid(props) {

    const {
        rows,
        loading,
        columns,
    } = props

    return (
        <AppDataGridStyled
            autoHeight
            density={'standard'}
            disableSelectionOnClick
            disableColumnSelector
            disableColumnFilter
            pageSize={12}
            rowsPerPageOptions={[12]}
            loading={loading}
            rows={rows}
            columns={columns}
        />
    );
}

AppDataGrid.propTypes = {
    loading: PropTypes.bool,
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

