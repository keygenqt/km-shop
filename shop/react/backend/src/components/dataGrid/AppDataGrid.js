import * as React from 'react';
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

    return (
        <AppDataGridStyled
            page={page}
            onPageChange={onChangePage}
            autoHeight
            density={'standard'}
            disableSelectionOnClick
            disableColumnSelector
            disableColumnFilter
            pageSize={10}
            rowsPerPageOptions={[10]}
            loading={loading}
            rows={rows}
            columns={columns.map((item) => ({
                ...item, ...{
                    headerClassName: (params) => {
                        return clsx('MuiDataGrid-custom', {
                            'MuiDataGrid-fullWith': params.colDef.minWidth === 0,
                            'MuiDataGrid-With30': params.colDef.minWidth === 50,
                            'MuiDataGrid-With90': params.colDef.minWidth === 90,
                        })
                    },
                    cellClassName: (params) => {
                        return clsx('MuiDataGrid-custom', {
                            'MuiDataGrid-fullWith': params.colDef.minWidth === 0,
                            'MuiDataGrid-With50': params.colDef.minWidth === 50,
                            'MuiDataGrid-With90': params.colDef.minWidth === 90,
                        })
                    },
                }
            }))}
        />
    );
}

AppDataGrid.propTypes = {
    loading: PropTypes.bool,
    page: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

