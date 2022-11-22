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
                left: -80,
                width: '100%',
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
            <Stack spacing={3}>

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
                    <img
                        alt={'bow'}
                        src={ConstantImages.home.bow}
                        style={{
                            position: 'absolute',
                            top: -40,
                            right: -50,
                            width: 650
                        }}
                    />

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
        </Stack>
    );
}

FirstBlockHomePage.propTypes = {};