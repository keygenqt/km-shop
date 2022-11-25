import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    IconButton,
    Pagination,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useParams} from "react-router";
import {ConstantCollections} from "../../base/constants/ConstantCollections";
import {ConstantProducts} from "../../base/constants/ConstantProducts";
import {AddShoppingCartOutlined, Star} from "@mui/icons-material";

export function ExploringPage() {

    let {filter} = useParams();

    const theme = useTheme()
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    const products = []

    ConstantProducts.forEach((product, index) => {
        products.push((
            <Grid key={`exploring-product-item-${index}`} item xl={3} lg={3} md={4} sm={6} xs={12} min={12} null={12}>
                <Box sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#F6F7F9',
                }}>
                    <Card variant={'outlined'} sx={{
                        border: 'none',
                        position: 'relative',
                    }}>

                        <CardMedia
                            component="img"
                            height="200"
                            image={product.image}
                            alt="green iguana"
                        />

                        <CardContent>
                            <Stack spacing={1}>

                                <Stack>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>

                                    <Stack justifyContent={'center'} sx={{
                                        height: 40
                                    }}>
                                        <Typography className={'TextMax2'} variant="body2" color="text.secondary">
                                            {product.desc}
                                        </Typography>
                                    </Stack>

                                </Stack>

                                <Stack spacing={1} direction={'row'} justifyContent={'space-between'}>
                                    <Chip
                                        size={'medium'}
                                        label={product.price}
                                        variant={'outlined'}
                                        color={'success'}
                                        sx={{
                                            marginTop: '1px',
                                            minWidth: 100,
                                            borderWidth: 2,
                                            fontWeight: 400,
                                            fontSize: 14
                                        }}
                                    />

                                    <Stack direction={'row'} spacing={0.7} alignItems={'center'}>
                                        <Star sx={{width: 18, height: 18, color: '#FBBF23'}}/>
                                        <Typography variant="body2" color="text.secondary">
                                            4.0
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </CardContent>

                        <CardActions disableSpacing>
                            <Stack spacing={1} sx={{width: '100%', mt: -1.5}}>
                                <Box sx={{
                                    height: 5,
                                    left: -10,
                                    width: 'calc(100% + 20px)',
                                    position: 'relative',
                                    backgroundColor: '#F6F7F9'
                                }}/>

                                <Stack direction={'row'} justifyContent={'space-between'} sx={{width: '100%'}}>
                                    <IconButton
                                        size={'small'}
                                        onClick={(event) => {

                                        }}
                                    >
                                        <Box sx={{p: 0.5, fontSize: 0}}>
                                            <AddShoppingCartOutlined color={'primary'}/>
                                        </Box>
                                    </IconButton>

                                    <Button variant={'outlined'} color={'secondary'}>
                                        View
                                    </Button>
                                </Stack>
                            </Stack>

                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        ))
    })

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

            <Box>
                <Grid container spacing={isSM ? 2 : 3}>
                    {products}
                </Grid>
            </Box>

            <Pagination
                count={10}
                size={isSM ? 'small' : 'medium'}
                variant="outlined"
                color="secondary"
            />

        </Stack>
    );
}

ExploringPage.propTypes = {};