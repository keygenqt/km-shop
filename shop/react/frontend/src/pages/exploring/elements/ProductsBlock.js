import * as React from "react";
import {useContext} from "react";
import {Box, Grid, Pagination, Stack, useMediaQuery, useTheme} from "@mui/material";
import {CardProduct} from "../../../components/other/CardProduct";
import PropTypes from "prop-types";
import {ConstantLottie, NavigateContext} from "../../../base";
import Lottie from "lottie-react";

export function ProductsBlock(props) {

    const {
        loading,
        rows
    } = props

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const {route} = useContext(NavigateContext)

    const [page, setPage] = React.useState(1);

    return (
        loading ? (
            <Box sx={{width: '100%'}}>
                <Stack alignItems={'center'} height={'100%'}>
                    <Box sx={{
                        width: 'fit-content',
                        backgroundColor: '#F6F7F9',
                        borderRadius: '50%',
                        p: 1.5,
                        margin: 'auto'
                    }}>
                        <Box sx={{
                            width: 180,
                            height: 180,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                        }}>
                            <Lottie animationData={ConstantLottie.catPlaying} style={{
                                width: 230,
                                position: 'relative',
                                top: 50
                            }}/>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        ) : (
            <Box sx={{position: 'relative', width: '100%'}}>
                {rows.length ? (
                    <Stack spacing={isSM ? 2 : 3} sx={{position: 'relative'}}>

                        <Grid container spacing={isSM ? 2 : 3}>
                            {rows.map((product) => (
                                <Grid key={`exploring-product-item-${product.id}`}
                                      item xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                                    <CardProduct product={product}/>
                                </Grid>
                            ))}
                        </Grid>

                        <Pagination
                            count={2}
                            page={page}
                            size={isSM ? 'small' : 'medium'}
                            variant="outlined"
                            color="secondary"
                            onChange={(event, value) => {
                                route.scrollToTopSmooth()
                                setTimeout(() => {
                                    setPage(value)
                                }, 350)
                            }}
                        />
                    </Stack>
                ) : (
                    <Stack alignItems={'center'} height={'100%'}>
                        <Box sx={{
                            width: 250,
                            height: 173,
                            margin: 'auto',
                            overflow: 'hidden'
                        }}>
                            <Lottie animationData={ConstantLottie.listEmpty} style={{
                                width: 300,
                                marginTop: -63,
                                marginLeft: -23,
                            }}/>
                        </Box>
                    </Stack>
                )}
            </Box>
        )
    );
}

ProductsBlock.propTypes = {
    loading: PropTypes.bool.isRequired,
    rows: PropTypes.array,
};