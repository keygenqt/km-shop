import * as React from 'react';
import {Avatar, Box, Chip, Stack, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../../base";

const steps = [
    {
        image: ConstantImages.home.magnifyingGlass,
        color: 'primary',
        title: 'Filter & Discover',
        subtitle: 'Smart filtering and suggestions make it easy to find',
    },
    {
        image: ConstantImages.home.shoppingCart,
        color: 'secondary',
        title: 'Add to bag',
        subtitle: 'Easily select the correct items and add them to the cart',
    },
    {
        image: ConstantImages.home.deliveryTruck,
        color: 'error',
        title: 'Fast shipping',
        subtitle: 'The carrier will confirm and ship quickly to you',
    },
    {
        image: ConstantImages.home.bestSeller,
        color: 'success',
        title: 'Enjoy the product',
        subtitle: 'Have fun and enjoy your 5-star quality products',
    }
]

export function StepsBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const items = []

    steps.forEach((item, index) => {
        items.push((
            <Stack
                key={`steps-${index}`}
                className={'MuiStack-item'}
                spacing={2}
                sx={{
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
                        label="Step 1"
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

            <Stack
                direction={isMD ? 'column' : 'row'}
                justifyContent="space-between"
                alignItems={isMD ? null : 'self-start'}
                spacing={isMD ? 3 : 8}
                sx={{
                    width: '100%',
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        borderBottom: '1px dashed #c4c4c4',
                        position: 'absolute',
                        left: 95,
                        right: 95,
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
            </Stack>
        </Stack>
    );
}

StepsBlockHomePage.propTypes = {};