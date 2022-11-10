import * as React from "react";
import {useEffect} from "react";
import {Alert, Snackbar} from "@mui/material";
import PropTypes from "prop-types";

export function SnackbarError(props) {

    const {
        error = null,
    } = props

    const [openSnackbarError, setOpenSnackbarError] = React.useState(false);

    useEffect(() => {
        setOpenSnackbarError(error != null)
    }, [error])

    return (
        <Snackbar
            open={openSnackbarError}
            autoHideDuration={2000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            onClose={() => {
                setOpenSnackbarError(false)
            }}
        >
            <Alert severity="error" sx={{width: '100%'}}>
                {error ? error.message : ""}
            </Alert>
        </Snackbar>
    );
}

SnackbarError.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ])
};