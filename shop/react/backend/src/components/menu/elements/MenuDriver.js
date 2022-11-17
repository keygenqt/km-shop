import {Divider, Stack} from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {InfoOutlined} from "@mui/icons-material";

export function MenuDriver(props) {

    const {
        title,
    } = props

    return (
        <Stack
            spacing={1}
            sx={{my: 1}}
        >
            <Divider/>

            {title ? (
                <Typography variant="caption" component="div">
                    {title ? (
                        <InfoOutlined sx={{
                            width: '15px',
                            height: '15px',
                            position: 'relative',
                            top: '3px',
                            left: '-2px',
                            paddingRight: '4px'
                        }}/>
                    ) : null}

                    {title}
                </Typography>
            ) : null}
        </Stack>
    )
}

MenuDriver.propTypes = {
    title: PropTypes.string,
};