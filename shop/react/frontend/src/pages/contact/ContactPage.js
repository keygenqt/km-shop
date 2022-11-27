import * as React from 'react';
import {useEffect, useRef} from 'react';
import {Avatar, Box, Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DoneOutlined, EmailOutlined, PhoneOutlined, SendOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantImages, ConstantLottie} from "../../base";

let intervalID

export function ContactPage() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
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
        <Stack spacing={isSM ? 3 : 6}>

            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Leave Us a Message
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    We'd love to hear from you.
                </Typography>
            </Stack>

            <Box sx={{width: '100%', position: 'relative'}}>

                <Lottie
                    lottieRef={lottieRef}
                    loop={0}
                    animationData={ConstantLottie.cat}
                    style={{
                        width: isSM ? 100 : 150,
                        position: 'absolute',
                        top: isSM ? -55 : -85,
                        right: isSM ? 10 : 40
                    }}
                />

                <Box sx={{
                    position: 'absolute',
                    width: 30,
                    height: 30,
                    backgroundColor: 'success.main',
                    borderRadius: '50%',
                    left: -15,
                    bottom: 68,
                    zIndex: 1
                }}/>

                <Grid container spacing={3}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12} min={12} null={12}>
                        <Stack
                            spacing={isMD ? 2 : 3}
                            sx={{
                                backgroundColor: '#F6F7F9',
                                borderRadius: 2,
                                p: isMD ? isSM ? 2 : 3 : 4,
                                position: 'relative'
                            }}
                        >
                            <Stack spacing={isMD ? 2 : 3} direction={isSM ? 'column' : 'row'}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                            </Stack>

                            <TextField
                                fullWidth
                                label="Email"
                                variant="filled"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: 'white'
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Phone (optional)"
                                variant="filled"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: 'white'
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Message"
                                variant="filled"
                                multiline
                                minRows={5}
                                maxRows={10}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: 'white'
                                    }
                                }}
                            />

                            <Box>
                                <Button
                                    disableElevation
                                    variant={'contained'}
                                    size={'large'}
                                    color={'secondary'}
                                    startIcon={<DoneOutlined sx={{height: 18}}/>}
                                >
                                    Send Message
                                </Button>
                            </Box>

                        </Stack>
                    </Grid>
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} min={12} null={12}>
                        <Box sx={{
                            backgroundColor: '#F7F0EA',
                            p: 1,
                            borderRadius: 2,
                            position: 'relative',
                            height: '100%',
                            boxSizing: 'border-box'
                        }}>
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
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Stack spacing={2} sx={{pt: isSM ? 2 : 4}}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Our contacts
                </Typography>
                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Stay in touch with us.
                </Typography>
            </Stack>

            <Box sx={{width: '100%'}}>
                <Stack direction={isMD ? 'column' : 'row'} spacing={4}>
                    <Stack
                        spacing={3}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{p: 4, borderRadius: 2, backgroundColor: '#eaf7f2'}}
                    >
                        <Avatar
                            src={ConstantImages.contact.address}
                            sx={{
                                p: 3,
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                '& img': {
                                    height: '115%'
                                }
                            }}
                        />
                        <Typography
                            variant={'body1'}
                            sx={{
                                textAlign: 'center',
                                fontSize: 18,
                                '@media(max-width: 1000px)': {
                                    fontSize: 14,
                                }
                            }}
                        >
                            Delivery is carried out throughout Russia. We are located in the city of Volgodonsk.
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={3}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{p: 4, borderRadius: 2, backgroundColor: '#F6F7F9'}}
                    >
                        <Avatar
                            src={ConstantImages.contact.email}
                            sx={{
                                p: 3,
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                '& img': {
                                    position: 'relative',
                                    top: 8
                                }
                            }}
                        />

                        <Typography variant={'caption'} sx={{textAlign: 'center'}}>
                            My personal mail
                        </Typography>

                        <Button
                            size={'medium'}
                            color={'secondary'}
                            variant={'contained'}
                            disableElevation
                            startIcon={<EmailOutlined/>}
                            sx={{textTransform: 'none'}}
                        >
                            keygenqt@gmail.com
                        </Button>
                    </Stack>
                    <Stack
                        spacing={3}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{p: 4, borderRadius: 2, backgroundColor: '#F6F7F9'}}
                    >
                        <Avatar
                            src={ConstantImages.contact.phone}
                            sx={{
                                p: 3,
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                            }}
                        />

                        <Typography variant={'caption'} sx={{textAlign: 'center'}}>
                            Join to Telegram
                        </Typography>

                        <Button
                            size={'medium'}
                            color={'secondary'}
                            variant={'contained'}
                            disableElevation
                            startIcon={<PhoneOutlined/>}
                            sx={{textTransform: 'none'}}
                        >
                            +7 (894) 443 111 11
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

ContactPage.propTypes = {};