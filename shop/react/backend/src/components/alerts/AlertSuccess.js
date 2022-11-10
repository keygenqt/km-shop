import * as React from "react";
import {Alert, Collapse, IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function AlertSuccess(props) {

    const [collapse, setCollapse] = React.useState(true);

    return (
        <Collapse in={collapse}>
            <Alert
                style={props.style}
                severity="success"
                sx={{
                    backgroundColor: '#dcffd4',
                    color: '#002e04',
                    borderRadius: 2,
                    marginBottom: 2,
                    '& svg': {
                        color: '#002e04',
                    }
                }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setCollapse(false);
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

AlertSuccess.propTypes = {
    style: PropTypes.object,
    children: PropTypes.string.isRequired
};