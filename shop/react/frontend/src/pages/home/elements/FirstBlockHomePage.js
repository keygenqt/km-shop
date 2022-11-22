import * as React from 'react';
import {Box, Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ConstantImages} from "../../../base";

export function FirstBlockHomePage() {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                backgroundColor: '#F7F0EA',
                borderRadius: 4,
                paddingX: 10,
                paddingY: 12,
                position: 'relative',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    top: 40,
                    left: -20,
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
                        backgroundColor: '#f7f0eade',
                        borderRadius: 4,
                        p: 4,
                        paddingLeft: 0
                    }}>
                        <Stack
                            spacing={3}
                        >
                            <Typography variant="h5">
                                In this season, find the best 🔥
                            </Typography>

                            <Typography variant="h2">
                                Collections for
                                <br/>
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
                                        borderRadius: 7,
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
                            margin: '0 auto'
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

                    <Box
                        sx={{
                            height: 80,
                            width: 80,
                            position: 'absolute',
                            top: 100,
                            right: 0,
                            left: 100,
                            margin: 'auto'
                        }}
                    >
                        <Box
                            sx={{
                                height: 40,
                                width: 80,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    height: 80,
                                    width: 80,
                                    top: 0,
                                    borderRadius: '50%',
                                    backgroundColor: 'primary.main',
                                    position: 'absolute',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                height: 40,
                                width: 80,
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    height: 80,
                                    width: 80,
                                    bottom: 0,
                                    borderRadius: '50%',
                                    backgroundColor: 'secondary.main',
                                    position: 'absolute',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    right: 30,
                    top: 30,
                    bottom: 0,
                    backgroundImage: `url(${ConstantImages.home.girl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 512
                }}/>
            </Stack>
        </Stack>
    );
}

FirstBlockHomePage.propTypes = {};