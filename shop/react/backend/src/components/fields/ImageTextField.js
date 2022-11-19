import * as React from 'react';
import {Avatar, Button, Stack, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {AppHelper} from "../../base";
import {BrokenImage} from "@mui/icons-material";

function _delete(obj, prop) {
    if (obj[prop] && ! obj[prop].length) delete obj[prop];
}

export function ImageTextField(props) {

    const {
        value,
        disabled,
        onClickImage,
    } = props

    const fieldProps = { ...props };

    delete fieldProps.onClickImage;

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
        >
            <TextField {...fieldProps} />

            {value ? (
                <Button
                    disabled={disabled}
                    color={'inherit'}
                    sx={{
                        p: 0,
                        minWidth: 'auto'
                    }}
                    onClick={() => {
                        onClickImage(value)
                    }}
                >
                    <Avatar
                        variant="rounded"
                        alt={'File'}
                        src={AppHelper.isImage(value) ? `${value}` : null}
                        sx={{
                            backgroundColor: disabled ? '#E0E0E0' : '#F2F2F2',
                            height: 40,
                            width: 40,
                            p: 1,
                            '& img': {
                                borderRadius: 1,
                                opacity: disabled ? 0.6 : 1,
                            },
                            '& .MuiSvgIcon-root': {
                                opacity: disabled ? 0.6 : 1,
                            }
                        }}>
                        <BrokenImage color={'secondary'} sx={{
                            fontSize: 55,
                        }}/>
                    </Avatar>
                </Button>
            ) : null}
        </Stack>
    );
}

ImageTextField.propTypes = {
    disabled: PropTypes.bool,
    onClickImage: PropTypes.func,
};