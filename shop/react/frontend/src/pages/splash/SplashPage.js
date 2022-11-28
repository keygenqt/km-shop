import * as React from 'react';
import {Box} from "@mui/material";
import {ConstantImages, ConstantLottie} from "../../base";
import Lottie from "lottie-react";

export function SplashPage(props) {

    const {
        error
    } = props

    return error ? (
        <Box className={'splash'}>
            <Box sx={{
                width: 192,
                height: 192
            }}>
                <Lottie animationData={ConstantLottie.error500} style={{
                    width: '278px',
                    margin: '-32px',
                    marginTop: '-61px'
                }}/>
            </Box>
        </Box>
    ) : (
        <Box className={'splash'}>
            <img className="content" alt="logo" src={ConstantImages.common.logo192}/>
        </Box>
    )
}

SplashPage.propTypes = {};