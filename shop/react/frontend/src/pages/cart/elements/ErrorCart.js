import * as React from "react";
import {BaseLayout} from "../../../components";
import {Box} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base";

export function ErrorCart() {
    return (
        <BaseLayout middle>
            <Box sx={{
                width: 192,
                height: 192,
                margin: 'auto'
            }}>
                <Lottie animationData={ConstantLottie.error500} style={{
                    width: '278px',
                    position: 'relative',
                    top: -57,
                    left: -33
                }}/>
            </Box>
        </BaseLayout>
    )
}

ErrorCart.propTypes = {};