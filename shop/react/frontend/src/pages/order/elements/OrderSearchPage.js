import * as React from 'react';
import {useContext} from 'react';
import {Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {SuccessCart} from "../../../components";
import {NavigateContext} from "../../../base";

export function OrderSearchPage() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const {route, routes} = useContext(NavigateContext)
    const [number, setNumber] = React.useState('');

    return (
        <Stack spacing={isSM ? 4 : 6}>
            <Stack spacing={2}>
                <Typography variant={isSM ? 'h4' : 'h3'}>
                    Search Order
                </Typography>

                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    Here you can find your order number.
                </Typography>
            </Stack>

            <Stack spacing={2} direction={isSM ? 'column' : 'row'} justifyContent={'stretch'}>
                <TextField
                    autoComplete='off'
                    fullWidth
                    label="Number"
                    variant="outlined"
                    sx={{maxWidth: isSM ? 'auto' : 350}}
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                />

                <Button
                    disabled={!Boolean(number)}
                    disableElevation
                    variant={'contained'}
                    size={'large'}
                    color={'secondary'}
                    startIcon={<SearchOutlined sx={{height: 18}}/>}
                    onClick={() => {
                        route.toLocation(routes.order, number)
                    }}
                >
                    Search
                </Button>

            </Stack>

            <Stack spacing={isSM ? 2 : 3}>
                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                    fontWeight: 100
                }}>
                    You can receive the order number after successful ordering:
                </Typography>

                <Box sx={{
                    backgroundColor: '#F6F7F9',
                    borderRadius: 2,
                    p: isSM ? 2 : 4,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }
                }}>
                    <SuccessCart number={"The order number will be here."}/>
                </Box>
            </Stack>

        </Stack>
    );
}

OrderSearchPage.propTypes = {};