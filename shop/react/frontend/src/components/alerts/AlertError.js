import * as React from "react";
import {Alert, Collapse, IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function AlertError(props) {

    const {
        onClose
    } = props

    const [collapse, setCollapse] = React.useState(true);

    return (
        <Collapse in={collapse}>
            <Alert
                style={props.style}
                severity="error"
                sx={{
                    color: 'error.dark',
                    backgroundColor: 'error.light',
                    borderRadius: 1,
                    '& svg': {
                        color: 'error.dark',
                    }
                }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setCollapse(false);
                            setTimeout(() => onClose(), 200)
                        }}
                    >
                        <Close fontSize="inherit"/>
                    </IconButton>
                }
            >
                <Typography gutterBottom variant="text3">
                    {props.children}
                </Typography>
            </Alert>
        </Collapse>
    );
}

AlertError.propTypes = {
    style: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};