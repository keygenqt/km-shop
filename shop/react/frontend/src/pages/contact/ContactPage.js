import * as React from 'react';
import {useEffect, useRef} from 'react';
import {Box, Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {EmailOutlined, MapOutlined, PhoneOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base";

let intervalID

export function ContactPage() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const lottieRef = useRef();

    useEffect(() => {
        if (lottieRef.current) {
            clearInterval(intervalID)
            intervalID = setInterval(() => {
                lottieRef.current.stop();
                lottieRef.current.play();
            }, 7000)
        }
    }, [])

    return (
        <Stack
            spacing={isSM ? 4 : 6}
            alignItems={'center'}
        >
            <Typography variant={isSM ? 'h4' : 'h3'} sx={{
                width: '100%'
            }}>
                Contact
            </Typography>

            <Box sx={{
                position: 'relative'
            }}>
                <Lottie
                    lottieRef={lottieRef}
                    loop={0}
                    animationData={ConstantLottie.cat}
                    style={{
                        width: isSM ? 100 : 150,
                        position: 'absolute',
                        top: isSM ? -60 : -85,
                        right: isSM ? 20 : 40
                    }}
                />

                <Box sx={{
                    position: 'absolute',
                    width: 30,
                    height: 30,
                    backgroundColor: 'info.light',
                    borderRadius: 4,
                    right: -15,
                    top: 150,
                    zIndex: 1
                }}/>

                <Box sx={{
                    backgroundColor: 'primary.light',
                    p: isSM ? 2 : 4,
                    borderRadius: 4,
                    position: 'relative'
                }}>
                    <Grid container spacing={isSM ? 2 : 3} sx={{
                        position: 'relative'
                    }}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>

                            <Stack spacing={isSM ? 2 : 3}>

                                <Stack
                                    spacing={2}
                                    direction={'row'}
                                    alignItems={'flex-start'}
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderRadius: 4
                                    }}
                                >
                                    <Box sx={{
                                        p: isSM ? 1 : 1.5,
                                        backgroundColor: 'secondary.light',
                                        borderRadius: '50%',
                                        fontSize: 0
                                    }}>
                                        <MapOutlined color={'secondary'}/>
                                    </Box>
                                    <Stack spacing={isSM ? 1 : 2} sx={{
                                        pt: 1.2
                                    }}>
                                        <Typography variant={'h5'}>
                                            Address
                                        </Typography>
                                        <Typography variant={'caption'} sx={{
                                            fontSize: isSM ? 14 : 18,
                                            fontWeight: 100
                                        }}>
                                            Delivery is carried out throughout Russia. We are located in the city of
                                            Volgodonsk.
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack
                                    spacing={2}
                                    direction={'row'}
                                    alignItems={'flex-start'}
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderRadius: 4
                                    }}
                                >
                                    <Box sx={{
                                        p: isSM ? 1 : 1.5,
                                        backgroundColor: 'secondary.light',
                                        borderRadius: '50%',
                                        fontSize: 0
                                    }}>
                                        <EmailOutlined color={'secondary'}/>
                                    </Box>
                                    <Stack spacing={1} sx={{
                                        pt: 1.2
                                    }}>
                                        <Typography variant={'h5'}>
                                            Email
                                        </Typography>

                                        <Button
                                            size={'small'}
                                            color={'secondary'}
                                            sx={{
                                                position: 'relative',
                                                left: -4,
                                                textTransform: 'none',
                                                fontSize: isSM ? 13 : 16,
                                                fontWeight: 400
                                            }}
                                        >
                                            example@example.com
                                        </Button>
                                    </Stack>
                                </Stack>

                                <Stack
                                    spacing={2}
                                    direction={'row'}
                                    alignItems={'flex-start'}
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderRadius: 4
                                    }}
                                >
                                    <Box sx={{
                                        p: isSM ? 1 : 1.5,
                                        backgroundColor: 'secondary.light',
                                        borderRadius: '50%',
                                        fontSize: 0
                                    }}>
                                        <PhoneOutlined color={'secondary'}/>
                                    </Box>
                                    <Stack spacing={2} sx={{
                                        pt: 1.2
                                    }}>
                                        <Typography variant={'h5'}>
                                            Phone
                                        </Typography>

                                        <Button
                                            size={'small'}
                                            color={'secondary'}
                                            sx={{
                                                position: 'relative',
                                                left: -4,
                                                textTransform: 'none',
                                                fontSize: isSM ? 13 : 16,
                                                fontWeight: 400
                                            }}
                                        >
                                            +7 (894) 443 111 11
                                        </Button>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>

                            <iframe
                                style={{
                                    border: 'none',
                                    borderRadius: 16,
                                    width: '100%',
                                    height: '100%',
                                    minHeight: 250
                                }}
                                title="Location"
                                src="https://yandex.com/map-widget/v1/?um=constructor%3A76ab87516c046b5d4f54647f1b9fe382edcaa24c935e6be8898244ec111ab1f4&amp;source=constructor"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                fontWeight
                sx={{
                    pt: isSM ? 2 : 4,
                    position: 'relative',
                    width: '100%',
                    maxWidth: 600,
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    width: 60,
                    height: 140,
                    backgroundColor: '#F09372',
                    borderRadius: 4,
                    right: -15,
                    top: 100
                }}/>

                <Box sx={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    backgroundColor: 'success.main',
                    borderRadius: '50%',
                    left: -10,
                    bottom: 30,
                    zIndex: 1
                }}/>

                <Stack
                    spacing={2}
                    sx={{
                        backgroundColor: '#F6F7F9',
                        borderRadius: 4,
                        width: '100%',
                        p: isSM ? 2 : 4,
                        boxSizing: 'border-box',
                        position: 'relative'
                    }}
                >
                    <Typography variant={'h4'}>
                        Do You Have Any Questions?
                    </Typography>

                    <Typography variant={'caption'} sx={{
                        pb: isSM ? 1 : 2
                    }}>
                        Leave us a message, we'd love to hear from you.
                    </Typography>

                    <Stack spacing={3}>
                        <Stack spacing={2}
                               sx={{
                                   backgroundColor: 'white',
                                   borderRadius: 4,
                                   p: isSM ? 2 : 4,
                               }}
                        >

                            <TextField
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                multiline
                                minRows={4}
                                maxRows={10}
                            />
                        </Stack>
                        <Box sx={{
                            textAlign: 'right'
                        }}>
                            <Button
                                size={'large'}
                                disableElevation
                                variant={'contained'}
                                color={'black'}
                                sx={{
                                    color: 'white',
                                    borderRadius: 7,
                                    textTransform: 'none'
                                }}
                                onClick={() => {

                                }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

ContactPage.propTypes = {};