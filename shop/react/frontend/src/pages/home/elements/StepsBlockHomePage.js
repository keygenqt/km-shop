import * as React from 'react';
import {Avatar, Box, Chip, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../../base";

export function StepsBlockHomePage() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="self-start"
            spacing={8}
            sx={{
                position: 'relative',
                '&:after': {
                    content: '""',
                    borderBlock: '1px dashed #c4c4c4',
                    position: 'absolute',
                    left: 140,
                    right: 140,
                    top: 157
                },
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    textAlign: 'center'
                }}
            >
                <Avatar
                    alt={'Filter & Discover'}
                    src={ConstantImages.home.magnifyingGlass}
                    sx={{
                        borderRadius: 0,
                        width: 110,
                        height: 110,
                        margin: '0 auto 16px',
                    }}
                />

                <Box>
                    <Chip
                        color={'primary'}
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
                    Filter & Discover
                </Typography>

                <Typography variant="body2">
                    Smart filtering and suggestions make it easy to find
                </Typography>
            </Stack>

            <Stack
                spacing={2}
                sx={{textAlign: 'center'}}
            >
                <Avatar
                    alt={'Add to bag'}
                    src={ConstantImages.home.shoppingCart}
                    sx={{
                        borderRadius: 0,
                        width: 110,
                        height: 110,
                        margin: '0 auto 16px'
                    }}
                />

                <Box>
                    <Chip
                        color={'secondary'}
                        label="Step 2"
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1
                        }}
                    />
                </Box>

                <Typography variant="h5">
                    Add to bag
                </Typography>

                <Typography variant="body2">
                    Easily select the correct items and add them to the cart
                </Typography>
            </Stack>

            <Stack
                spacing={2}
                sx={{textAlign: 'center'}}
            >
                <Avatar
                    alt={'Fast shipping'}
                    src={ConstantImages.home.deliveryTruck}
                    sx={{
                        borderRadius: 0,
                        width: 110,
                        height: 110,
                        margin: '0 auto 16px'
                    }}
                />

                <Box>
                    <Chip
                        color={'info'}
                        label="Step 3"
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1
                        }}
                    />
                </Box>

                <Typography variant="h5">
                    Fast shipping
                </Typography>

                <Typography variant="body2">
                    The carrier will confirm and ship quickly to you
                </Typography>
            </Stack>

            <Stack
                spacing={2}
                sx={{textAlign: 'center'}}
            >
                <Avatar
                    alt={'Enjoy the product'}
                    src={ConstantImages.home.bestSeller}
                    sx={{
                        borderRadius: 0,
                        width: 110,
                        height: 110,
                        margin: '0 auto 16px'
                    }}
                />

                <Box>
                    <Chip
                        color={'success'}
                        label="Step 4"
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1
                        }}
                    />
                </Box>

                <Typography variant="h5">
                    Enjoy the product
                </Typography>

                <Typography variant="body2">
                    Have fun and enjoy your 5-star quality products
                </Typography>
            </Stack>

        </Stack>
    );
}

StepsBlockHomePage.propTypes = {};