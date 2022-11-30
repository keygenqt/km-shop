import * as React from 'react';
import {Box} from "@mui/material";
import PropTypes from "prop-types";
import {BaseLayout} from "../../../components";
import Lottie from "lottie-react";
import {ConstantLottie, HttpClient, useEffectTimout} from "../../../base";
import {NotFoundOrderPage} from "./NotFoundOrderPage";
import {OrderViewProductsPage} from "./OrderViewProductsPage";

export function OrderViewPage(props) {

    const {
        number
    } = props

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [order, setOrder] = React.useState(null);

    useEffectTimout('OrderViewPage', async () => {
        try {
            await new Promise(r => setTimeout(r, 1000));
            const response = await HttpClient.get.orderByNumber(number)
            setOrder(response.mapToOrder())
            setLoading(false)
        } catch (e) {

            console.log(e)

            setError(e.message)
            setLoading(false)
        }
    }, [number], () => {
        setError(null)
        setLoading(true)
    })

    return (
        loading || error ? (
            <BaseLayout middle>
                {error ? (
                    <NotFoundOrderPage/>
                ) : (
                    <Box sx={{
                        width: 'fit-content',
                        backgroundColor: '#F6F7F9',
                        borderRadius: '50%',
                        p: 1.5,
                        margin: 'auto'
                    }}>
                        <Box sx={{
                            width: 260,
                            height: 260,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                        }}>
                            <Lottie animationData={ConstantLottie.catPlaying} style={{
                                width: '290px',
                                position: 'relative',
                                top: 70
                            }}/>
                        </Box>
                    </Box>
                )}
            </BaseLayout>
        ) : (
            <BaseLayout>
                <OrderViewProductsPage data={order}/>
            </BaseLayout>
        )
    )
}

OrderViewPage.propTypes = {
    number: PropTypes.string.isRequired,
};