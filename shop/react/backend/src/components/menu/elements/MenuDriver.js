import {Divider, Stack} from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export function MenuDriver(props) {

    const {
        icon,
        title,
    } = props

    const IconMenuDriver = icon;

    return (
        <Stack
            spacing={1}
            sx={{my: 1}}
        >
            <Divider/>

            {title ? (
                <Typography variant="caption" component="div">
                    {icon ? (
                        <IconMenuDriver sx={{
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
    icon: PropTypes.object,
    title: PropTypes.string,
};