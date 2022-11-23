import * as React from 'react';
import {Box} from "@mui/material";

export function ColorsCircle(props) {

    const {
        sx
    } = props

    return (
        <Box
            sx={{
                position: 'absolute',
                ...sx
            }}
        >
            <Box
                sx={{
                    height: sx.height / 2,
                    width: sx.width,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        height: sx.height,
                        width: sx.width,
                        top: 0,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        position: 'absolute',
                    }}
                />
            </Box>
            <Box
                sx={{
                    height: sx.height / 2,
                    width: sx.width,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        height: sx.height,
                        width: sx.width,
                        bottom: 0,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        position: 'absolute',
                    }}
                />
            </Box>
        </Box>
    );
}

ColorsCircle.propTypes = {

};