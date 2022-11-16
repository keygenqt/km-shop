import * as React from 'react';
import {useEffect} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function MessageDialog(props) {

    const {
        row,
        onClose,
    } = props

    const [rowData, setRowData] = React.useState(row);

    useEffect(() => {
        if (row) setRowData(row)
    }, [row])

    return (
        <Dialog
            open={Boolean(row)}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" variant="h5">
                Message
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    {rowData?.message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    color={'inherit'}
                    onClick={onClose}
                    autoFocus
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

MessageDialog.propTypes = {
    row: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
    onClose: PropTypes.func.isRequired,
};