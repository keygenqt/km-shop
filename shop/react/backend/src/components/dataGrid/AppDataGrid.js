import * as React from 'react';
import PropTypes from "prop-types";
import {AppDataGridStyled} from "./styled/AppDataGridStyled";
import clsx from "clsx";

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
            columns={columns.map((item) => ({
                ...item, ...{
                    headerClassName: (params) => {
                        return clsx('MuiDataGrid-custom', {
                            'MuiDataGrid-fullWith': params.colDef.minWidth === 0,
                        })
                    },
                    cellClassName: (params) => {
                        return clsx('MuiDataGrid-custom', {
                            'MuiDataGrid-fullWith': params.colDef.minWidth === 0
                        })
                    },
                }
            }))}
        />
    );
}

AppDataGrid.propTypes = {
    loading: PropTypes.bool,
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

