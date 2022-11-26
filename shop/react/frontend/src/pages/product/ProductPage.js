import * as React from 'react';
import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {ConstantProducts} from "../../base/constants/ConstantProducts";
import {ErrorPage} from "../error/ErrorPage";
import {BaseLayout} from "../../components";

export function ProductPage() {

    let {id} = useParams();
    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const product = ConstantProducts
        .find((it) => it.id === parseInt(id))

    return (
        product ? (
            <BaseLayout>
                <Stack spacing={isSM ? 4 : 6}>
                    <Stack spacing={2}>
                        <Typography variant={isSM ? 'h4' : 'h3'}>
                            {product.title}
                        </Typography>

                        <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                            fontWeight: 100
                        }}>
                            {product.desc}
                        </Typography>
                    </Stack>
                </Stack>
            </BaseLayout>
        ) : (
            <BaseLayout middle>
                <ErrorPage/>
            </BaseLayout>
        )
    );
}

ProductPage.propTypes = {};