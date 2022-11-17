import * as React from 'react';
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {TrendingDownOutlined, TrendingUpOutlined} from "@mui/icons-material";

export function PercentDashboard(props) {

    const {
        percent,
        color,
        count,
        isPositive,
    } = props

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{paddingY: 2}}
        >
            <Typography variant="h4" color={color}>
                {count}
            </Typography>

            {percent ? (
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        color: isPositive ? 'success.main' : 'error.main',
                        background: "#ffffffb5",
                        borderRadius: '5px',
                        paddingY: 1,
                        paddingX: 2
                    }}
                >
                    {isPositive ? <TrendingUpOutlined/> : <TrendingDownOutlined/>}

                    <Typography variant="h5">
                        {percent}%
                    </Typography>

                </Stack>
            ) : null}

        </Stack>
    );
}

PercentDashboard.propTypes = {
    percent: PropTypes.number,
    isPositive: PropTypes.bool,
    color: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
};