import * as React from 'react';
import {Avatar, Box, Button, Grid, Stack, useMediaQuery, useTheme} from "@mui/material";
import {ConstantImages} from "../../../base";
import {ColorsCircle} from "./ColorsCircle";
import Typography from "@mui/material/Typography";

export function MobileBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container spacing={4}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12} sx={{
                margin: 'auto',
                '@media(max-width: 350px)': {
                    paddingBottom: 5
                }
            }}>

                <Box sx={{
                    position: 'relative',
                    textAlign: 'center'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        height: 80,
                        width: 80,
                        borderRadius: '50%',
                        backgroundColor: '#F09372',
                        top: 140,
                        left: 0
                    }}/>

                    <Box sx={{
                        position: 'absolute',
                        height: 150,
                        width: 80,
                        borderRadius: 6,
                        backgroundColor: 'secondary.light',
                        top: 170,
                        left: 30
                    }}/>

                    <Box sx={{
                        position: 'absolute',
                        height: 100,
                        width: 45,
                        borderRadius: 3,
                        backgroundColor: 'success.main',
                        bottom: 80,
                        right: 65
                    }}/>

                    <ColorsCircle
                        sx={{
                            height: 50,
                            width: 50,
                            right: -16,
                            top: 40
                        }}
                    />

                    <Avatar
                        src={ConstantImages.home.iphone}
                        sx={{
                            maxWidth: 230,
                            display: 'inline-block',
                            borderRadius: 0,
                            width: '50%',
                            height: 'auto'
                        }}
                    />
                </Box>

            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                <Stack
                    spacing={3}
                    justifyContent="center"
                    alignItems="flex-start"
                    sx={{
                        height: '100%',
                        paddingX: '60px',
                        '@media(max-width: 950px)': {
                            paddingX: '30px',
                        }
                    }}
                >
                    <Typography variant={'h6'} sx={{
                        marginBottom: -2
                    }}>
                        DOWNLOAD & ENJOY
                    </Typography>

                    <Typography variant={isMD ? 'h4' : 'h3'} sx={{
                        '@media(max-width: 1070px)': {
                            '& br': {
                                display: 'none'
                            }
                        }
                    }}>
                        Get the Shop app
                        <br/>
                        for shopping
                    </Typography>

                    <Typography
                        variant={'caption'}
                        sx={{
                            maxWidth: isMD ? 'auto' : 300
                        }}
                    >
                        Explore and find products for your unique everyday style for yourself and your beloved daughters
                        or granddaughters.
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            paddingBottom: isMD ? 0 : 3
                        }}
                    >
                        <Button
                            sx={{
                                p: 0,
                                borderRadius: 2,
                                maxWidth: 160
                            }}
                        >
                            <img
                                src={ConstantImages.home.googlePlay}
                                alt={'Google Play'}
                                style={{
                                    width: '100%'
                                }}
                            />
                        </Button>

                        <Button
                            sx={{
                                p: 0,
                                borderRadius: 5,
                                maxWidth: 160
                            }}
                        >
                            <img
                                src={ConstantImages.home.appstore}
                                alt={'Google Play'}
                                style={{
                                    width: '100%'
                                }}
                            />
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

MobileBlockHomePage.propTypes = {};