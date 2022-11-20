import * as React from 'react';
import {Skeleton, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {TrendingDownOutlined, TrendingUpOutlined} from "@mui/icons-material";

export function PercentDashboard(props) {

    const {
        percent,
        color,
        count,
    } = props

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{paddingY: 2}}
        >
            {count ? (
                <Typography variant="h4" color={color} sx={{
                    fontSize: '32px'
                }}>
                    {count}
                </Typography>
            ) : (
                <Stack
                    width={'100%'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="space-between"
                    spacing={2}
                >
                    <Skeleton variant={'rounded'} height={40} width={150}/>

                    {percent !== undefined ? (
                        <Skeleton variant={'rounded'} height={40} width={98}/>
                    ) : null}
                </Stack>
            )}

            {percent ? (
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        color: percent >= 0 ? 'success.main' : 'error.main',
                        background: "#ffffffb5",
                        borderRadius: '5px',
                        paddingY: 1,
                        paddingX: 2
                    }}
                >
                    {percent >= 0 ? <TrendingUpOutlined/> : <TrendingDownOutlined/>}

                    <Typography variant="h5">
                        {percent >= 0 ? (percent) : (percent * -1)}%
                    </Typography>

                </Stack>
            ) : null}

        </Stack>
    );
}

PercentDashboard.propTypes = {
    count: PropTypes.number,
    percent: PropTypes.number,
    color: PropTypes.string.isRequired,
};