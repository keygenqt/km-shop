import * as React from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {GenericIcon} from "../other/GenericIcon";

export function IconTextField(props) {

    const {
        value,
        disabled,
    } = props

    const fieldProps = {...props};

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
        >
            <TextField {...fieldProps} />

            {value ? (
                <Box sx={{
                    borderBottom: disabled ? '1px dotted #212121' : '1px solid #0000006b',
                }}>
                    <Button
                        disabled={disabled}
                        color={'inherit'}
                        sx={{
                            p: 0,
                            minWidth: 'auto',
                            '& .MuiTouchRipple-root': {
                                display: 'none'
                            }
                        }}
                    >
                        <GenericIcon
                            iconName={value}
                            sx={{
                                backgroundColor: disabled ? '#E4E4E4' : '#F2F2F2',
                                height: 39,
                                width: 39,
                                p: 1,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                '& img': {
                                    borderRadius: 1,
                                    opacity: disabled ? 0.6 : 1,
                                },
                                '& .MuiSvgIcon-root': {
                                    opacity: disabled ? 0.6 : 1,
                                }
                            }}
                        />
                    </Button>
                </Box>
            ) : null}
        </Stack>
    );
}

IconTextField.propTypes = {
    disabled: PropTypes.bool
};