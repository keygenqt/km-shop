import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export function FileDeleteDialog(props) {

    const {
        open,
        onPositive,
        onNegative,
    } = props

    return (
        <Dialog
            open={open}
            onClose={onNegative}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" variant="h5">
                Remove relation
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    Delete only unused relations. The link will be deprecated soon.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onPositive}>
                    Delete
                </Button>
                <Button
                    color={'inherit'}
                    onClick={onNegative}
                    autoFocus
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

FileDeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onPositive: PropTypes.func.isRequired,
    onNegative: PropTypes.func.isRequired,
};