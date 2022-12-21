import * as React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {Avatar, Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {EmailOutlined, PhoneOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantImages, ConstantLottie, NavigateContext} from "../../base";
import {ContactForm} from "./elements/ContactForm";
import {ConstantsConf} from "../../conf/ConstantsConf";

let intervalID

export function ContactPage() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const {route} = useContext(NavigateContext)

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
                    Оставьте нам сообщение
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Мы обязательно прочтем и ответим, если будет необходимость.
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
                        <ContactForm/>
                    </Grid>
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} min={12} null={12}>
                        <Box sx={{
                            backgroundColor: '#F7F0EA',
                            p: 1,
                            borderRadius: 2,
                            position: 'relative',
                            height: 518,
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
                                src={ConstantsConf.urlMap}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Stack spacing={2} sx={{pt: isSM ? 2 : 4}}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Наши контакты
                </Typography>
                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Будь на связи.
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
                            Доставка осуществляется по всей России, а мы находимся в городе Волгодонск.
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
                            Моя личная почта
                        </Typography>

                        <Button
                            size={'medium'}
                            color={'secondary'}
                            variant={'contained'}
                            disableElevation
                            startIcon={<EmailOutlined/>}
                            sx={{textTransform: 'none'}}
                            onClick={() => {
                                route.openEmail(ConstantsConf.email)
                            }}
                        >
                            {ConstantsConf.email}
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
                            Добавляйтесь в Telegram
                        </Typography>

                        <Button
                            size={'medium'}
                            color={'secondary'}
                            variant={'contained'}
                            disableElevation
                            startIcon={<PhoneOutlined/>}
                            sx={{textTransform: 'none'}}
                            onClick={() => {
                                route.openUrlNewTab(ConstantsConf.telegram)
                            }}
                        >
                            {ConstantsConf.phone}
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

ContactPage.propTypes = {};