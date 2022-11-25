import * as React from 'react';
import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {ConstantCollections} from "../../base/constants/ConstantCollections";

export function ExploringPage() {

    let {filter} = useParams();

    const theme = useTheme()
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Stack spacing={isSM ? 4 : 6}>

            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    {filter ? `${ConstantCollections.find((it) => it.key === filter)?.name ?? 'Best'} collection` : 'Exploring'}
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Here you can find your style.
                </Typography>
            </Stack>



        </Stack>
    );
}

ExploringPage.propTypes = {};