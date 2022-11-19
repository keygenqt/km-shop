import * as React from 'react';
import {useEffect} from 'react';
import {Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import PropTypes from "prop-types";
import {AppHelper} from "../../base";

export function FileDialog(props) {

    const {
        url,
        onClose,
    } = props

    const [urlData, setUrlData] = React.useState(url);
    const isImage = AppHelper.isImage(urlData)

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
            {isImage ? (
                <DialogContent sx={{
                    p: 1
                }}>
                    <Avatar alt={'File'} src={urlData} sx={{
                        borderRadius: 2,
                        height: 'inherit',
                        width: '500px',
                        marginBottom: '-8px'
                    }}/>
                </DialogContent>
            ) : (
                <>
                    <DialogTitle variant="h5" id="alert-dialog-title" sx={{p: 2}}>
                        Unknown file type
                    </DialogTitle>
                    <DialogContent sx={{
                        p: 2
                    }}>
                        You can upload different types of files, but be careful when linking them to a form.
                    </DialogContent>
                </>
            )}

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