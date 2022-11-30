import * as React from 'react';
import {useContext} from 'react';
import {Button, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ContentPasteSearchOutlined} from "@mui/icons-material";
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
                    fontWeight: 100,
                }}>
                    Here you can find your order by the number received after successful ordering.
                </Typography>
            </Stack>

            <Stack
                spacing={2}
                direction={isSM ? 'column' : 'row'}
                justifyContent={'stretch'}
            >
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
                    disabled={!Boolean(number) || number.length !== 20}
                    disableElevation
                    variant={'contained'}
                    size={'large'}
                    color={'secondary'}
                    onClick={() => {
                        route.toLocation(routes.order, number)
                    }}
                >
                    <ContentPasteSearchOutlined sx={{fontSize: 28}}/>
                </Button>
            </Stack>
        </Stack>
    );
}

OrderSearchPage.propTypes = {};