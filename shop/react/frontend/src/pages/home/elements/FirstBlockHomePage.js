import * as React from 'react';
import {Box, Button, Stack, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../../base";
import {ColorsCircle} from "./ColorsCircle";

export function FirstBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                backgroundColor: '#F7F0EA',
                borderRadius: 2,
                paddingX: isMD ? 4 : 10,
                paddingY: isMD ? 7 : 12,
                position: 'relative',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    borderRadius: '50%',
                    width: 30,
                    height: 30,
                    bottom: 180,
                    left: -15,
                    backgroundColor: 'success.main'
                }
            }}
        >
            <Stack
                spacing={3}
                direction="row"
            >
                <Box>
                    <Box sx={{
                        position: 'relative',
                        zIndex: 1,
                        p: isMD ? 0 : 4,
                        paddingLeft: 0
                    }}>
                        <Stack
                            spacing={isMD ? 2 : 3}
                        >
                            <Typography variant={isMD ? 'h6' : 'h5'}>
                                In this season, find the best 🔥
                            </Typography>

                            <Typography variant={isMD ? 'h4' : 'h2'}>
                                Collections for
                                {!isMD ? (
                                    <br/>
                                ) : null}
                                your style
                            </Typography>

                            <Box sx={{
                                paddingTop: 2
                            }}>
                                <Button
                                    disableElevation
                                    variant={'contained'}
                                    color={'black'}
                                    sx={{
                                        color: 'white',
                                        paddingY: 2,
                                        paddingX: 4
                                    }}
                                >
                                    <Typography variant="h5">
                                        Start your search
                                    </Typography>
                                </Button>
                            </Box>
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            height: 40,
                            width: 120,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 250,
                            overflow: 'hidden',
                            margin: '0 auto',
                            '@media(max-width: 770px)': {
                                right: -140,
                            }
                        }}
                    >
                        <Box
                            sx={{
                                height: 120,
                                width: 120,
                                borderRadius: '50%',
                                backgroundColor: 'secondary.main',
                                position: 'absolute',
                            }}
                        />
                    </Box>

                    <ColorsCircle
                        sx={{
                            height: 80,
                            width: 80,
                            right: 0,
                            top: 20,
                            left: 100,
                            margin: 'auto',
                            '@media(max-width: 770px)': {
                                margin: 'inherit',
                                left: 'auto',
                                top: -40,
                                right: 20
                            }
                        }}
                    />

                </Box>

                <Box sx={{
                    position: 'absolute',
                    right: 5,
                    top: 30,
                    bottom: 0,
                    backgroundImage: `url(${ConstantImages.home.girl})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: 'right',
                    width: 538,
                    '@media(max-width: 1200px)': {
                        top: 'auto',
                        height: 400,
                    },
                    '@media(max-width: 1000px)': {
                        height: 300,
                    },
                    '@media(max-width: 770px)': {
                        display: 'none'
                    }
                }}/>
            </Stack>
        </Stack>
    );
}

FirstBlockHomePage.propTypes = {};