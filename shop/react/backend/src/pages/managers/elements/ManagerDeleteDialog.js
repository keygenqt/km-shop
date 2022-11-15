import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function ManagerDeleteDialog(props) {

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
            <DialogTitle id="alert-dialog-title">
                <Typography variant="h5">
                    Delete
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    Are you sure you want to remove this account?
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

ManagerDeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onPositive: PropTypes.func.isRequired,
    onNegative: PropTypes.func.isRequired,
};