import * as React from "react";
import {Avatar, Chip} from "@mui/material";
import PropTypes from "prop-types";
import {FilePresent} from "@mui/icons-material";

function isImage(url) {
    return url.includes('.png')
        || url.includes('.jpg')
        || url.includes('.jpeg')
}

export function MultipleFileChip(props) {

    const {
        url,
        disabled,
        onClick,
        onDelete,
    } = props

    return (
        <Chip
            disabled={disabled}
            avatar={ <Avatar alt={'File'} src={isImage(url) ? `${url}` : null} sx={{
                border: '1px solid #bfbfbf',
                backgroundColor: 'white',
            }}>
                <FilePresent sx={{
                fontSize: '17px',
            }}/>
                </Avatar>}
            variant="outlined"
            onClick={() => {
                onClick(url)
            }}
            onDelete={() => {
                onDelete(url)
            }}
            sx={{
                '& .MuiChip-label': {
                    p: 1
                }
            }}
        />
    )
}

MultipleFileChip.propTypes = {
    url: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};