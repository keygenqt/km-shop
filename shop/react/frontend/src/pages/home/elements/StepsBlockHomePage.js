import * as React from 'react';
import {Avatar, Box, Chip, Grid, Stack, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../../base";
import {ContactForm} from "../../contact/elements/ContactForm";

const steps = [
    {
        image: ConstantImages.home.magnifyingGlass,
        color: 'primary',
        title: 'Фильтруй',
        subtitle: 'Интеллектуальная фильтрация и предложения облегчают поиск',
    },
    {
        image: ConstantImages.home.shoppingCart,
        color: 'secondary',
        title: 'Добавь в корзину',
        subtitle: 'Легко выбрать нужные товары и добавить их в корзину',
    },
    {
        image: ConstantImages.home.deliveryTruck,
        color: 'error',
        title: 'Быстрая доставка',
        subtitle: 'Перевозчик подтвердит и быстро отправит вам',
    },
    {
        image: ConstantImages.home.bestSeller,
        color: 'success',
        title: 'Наслаждайтесь',
        subtitle: 'Получайте удовольствие и наслаждайтесь качественными продуктами',
    }
]

export function StepsBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const items = []

    steps.forEach((item, index) => {
        items.push((
            <Grid key={`steps-${index}`} item xl={3} lg={3} md={3} sm={12} xs={12} min={12} null={12}>
                <Stack
                    className={'MuiStack-item'}
                    spacing={2}
                    sx={{
                        pl: 1,
                        pr: 1,
                        marginBottom: isMD && steps.length-1 !== index ? 2 : 0,
                        textAlign: 'center',
                        ...(isMD ? {
                            width: '100%',
                            boxSizing: 'border-box'
                        } : {})
                    }}
                >
                    <Avatar
                        alt={item.title}
                        src={item.image}
                        sx={{
                            borderRadius: 0,
                            width: 110,
                            height: 110,
                            margin: '0 auto 16px',
                        }}
                    />
                    <Box>
                        <Chip
                            color={item.color}
                            label={`Step ${index + 1}`}
                            variant="outlined"
                            sx={{
                                backgroundColor: 'white',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </Box>
                    <Typography variant="h5">
                        {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.subtitle}
                    </Typography>
                </Stack>
            </Grid>
        ))
    })

    return (
        <Stack
            spacing={4}
            alignItems={'center'}
        >

            {isMD ? (
                <Typography variant={'h5'} sx={{
                    mb: -1,
                    mt: -1
                }}>
                    How it works
                </Typography>
            ) : null}

            <Grid container
                sx={{
                    width: '100%',
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        borderBottom: '1px dashed #c4c4c4',
                        position: 'absolute',
                        left: 115,
                        right: 115,
                        top: 157
                    },
                    ...(
                        isMD ? {
                            '& .MuiStack-item': {
                                border: '6px solid #F6F7F9',
                                borderRadius: 2,
                                p: 2,
                            },
                            '&:after': {
                                display: 'none'
                            }
                        } : {}
                    )
                }}
            >
                {items}
            </Grid>
        </Stack>
    );
}

StepsBlockHomePage.propTypes = {};