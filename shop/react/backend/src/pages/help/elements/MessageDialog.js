import * as React from 'react';
import {useEffect} from 'react';
import {Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {EmailOutlined, PhoneOutlined} from "@mui/icons-material";

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
            <DialogTitle variant="h5" sx={{minWidth: 400}}>
                Message from {rowData?.fname} {rowData?.lname}
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <Box sx={{
                        marginLeft: -1,
                        '& .MuiChip-root': { marginLeft: 1 }
                    }}>
                        <Chip
                            icon={<EmailOutlined sx={{width: 16, pl: 0.8}}/>}
                            label={rowData?.email}
                            variant="outlined"
                        />
                        {rowData?.phone ? (
                            <Chip
                                icon={<PhoneOutlined sx={{width: 16, pl: 0.8}}/>}
                                label={rowData?.phone}
                                variant="outlined"
                            />
                        ) : null}
                    </Box>
                    <Typography variant="body2">
                        {rowData?.message}
                    </Typography>
                </Stack>
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