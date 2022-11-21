import * as React from 'react';
import {useCallback} from 'react';
import PropTypes from "prop-types";
import {AppDataGridStyled} from "./styled/AppDataGridStyled";
import clsx from "clsx";

/**
 * Application Data Grid
 */
export function AppDataGrid(props) {

    const {
        page,
        rows,
        loading,
        columns,
        onChangePage,
    } = props

    const className = useCallback(
        (params) => {
            return clsx('MuiDataGrid-custom', {
                'MuiDataGrid-fullWith': params.colDef.minWidth === 0,
                'MuiDataGrid-With95': params.colDef.minWidth === 95,
                'MuiDataGrid-With90': params.colDef.minWidth === 90,
                'MuiDataGrid-With85': params.colDef.minWidth === 85,
                'MuiDataGrid-With80': params.colDef.minWidth === 80,
                'MuiDataGrid-With75': params.colDef.minWidth === 75,
                'MuiDataGrid-With70': params.colDef.minWidth === 70,
                'MuiDataGrid-With65': params.colDef.minWidth === 65,
                'MuiDataGrid-With60': params.colDef.minWidth === 60,
                'MuiDataGrid-With55': params.colDef.minWidth === 55,
                'MuiDataGrid-With50': params.colDef.minWidth === 50,
            })
        }, [],
    );

    return (
        <AppDataGridStyled
            page={page}
            onPageChange={onChangePage}
            autoHeight
            density={'standard'}
            disableSelectionOnClick
            disableColumnSelector
            disableColumnFilter
            pageSize={9}
            rowsPerPageOptions={[9]}
            loading={loading || rows === null}
            rows={rows ?? []}
            columns={columns.map((item) => ({
                ...item, ...{headerClassName: className, cellClassName: className}
            }))}
        />
    );
}

AppDataGrid.propTypes = {
    rows: PropTypes.array,
    loading: PropTypes.bool,
    page: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
};

