import * as React from 'react';
import {useEffect} from 'react';
import {Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function FileDialog(props) {

    const {
        url,
        onClose,
    } = props

    const [urlData, setUrlData] = React.useState(url);

    useEffect(() => {
        if (url) setUrlData(url)
    }, [url])

    return (
        <Dialog
            open={Boolean(url)}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent sx={{
                p: 1
            }}>
                <Avatar alt={'File'} src={urlData} sx={{
                    borderRadius: 2,
                    height: 'inherit',
                    width: '500px',
                    border: '1px dotted #808080',
                    marginBottom: '-8px'
                }}/>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        navigator.clipboard.writeText(urlData)
                        onClose()
                    }}>
                    Copy Link
                </Button>
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

FileDialog.propTypes = {
    row: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};