import * as React from "react";
import {Alert, Snackbar} from "@mui/material";
import PropTypes from "prop-types";
import {useEffect} from "react";

let timeoutID

export function SnackbarError(props) {

    const {
        error = null,
        onClose,
    } = props

    useEffect(() => {
        if (error != null) {
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                onClose()
            }, 1500)
        }
    }, [error, onClose])

    return error !== null ? (
        <Snackbar
            open={true}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        >
            <Alert severity="error" sx={{width: '100%', backgroundColor: 'error.main', color: 'white'}}>
                {error ? error : "..."}
            </Alert>
        </Snackbar>
    ) : null;
}

SnackbarError.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
    onClose: PropTypes.func.isRequired
};