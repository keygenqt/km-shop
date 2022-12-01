import * as React from "react";
import {useContext} from "react";
import {Box, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import {InfoOutlined, NumbersOutlined} from "@mui/icons-material";
import {ConstantLottie, NavigateContext} from "../../../base";

export function SuccessCart(props) {

    const {
        number
    } = props

    const {route, routes} = useContext(NavigateContext)

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack spacing={4} sx={{textAlign: 'center'}}>

            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Successfully!
                </Typography>

                <Typography variant={'h5'} sx={{
                    fontWeight: 100,
                    maxWidth: 500,
                    marginLeft: 'auto !important',
                    marginRight: 'auto !important'
                }}>
                    Thanks for your order. You will be contacted to clarify the details of the order. See you later!
                </Typography>
            </Stack>

            <Box sx={{
                height: 180,
                width: 180,
                overflow: 'hidden',
                marginLeft: 'auto !important',
                marginRight: 'auto !important'
            }}>
                <Lottie animationData={ConstantLottie.orderSuccess} style={{
                    width: 180,
                }}/>
            </Box>

            <Box>
                <Button
                    size={'large'}
                    color={'secondary'}
                    variant={'outlined'}
                    startIcon={<InfoOutlined/>}
                    onClick={() => {
                        route.toLocation(routes.order, number)
                    }}
                >
                    <Typography variant={isSM ? 'h6' : 'h5'} sx={{color: 'secondary.main'}}>
                        Detailed information
                    </Typography>
                </Button>
            </Box>

        </Stack>
    )
}

SuccessCart.propTypes = {
    number: PropTypes.string.isRequired,
};