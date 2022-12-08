import * as React from 'react';
import {useContext} from 'react';
import {Box, Button, ButtonGroup, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {ArrowUpwardOutlined, EmailOutlined, Telegram} from "@mui/icons-material";
import {NavigateContext} from "../../base";
import {ContactConf} from "../../conf/ContactConf";

/**
 * Application footer
 */
export function AppFooter() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const {route} = useContext(NavigateContext)

    return (
        <Box sx={{
            p: 4,
            backgroundColor: 'secondary.light',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'relative'
        }}>
            <Stack
                direction={isSM ? 'column' : 'row'}
                justifyContent="space-between"
                alignItems={'flex-start'}
                spacing={3}
            >

                <Box sx={{margin: 0, p: '0 !important', maxWidth: '630px !important'}}>
                    <Stack spacing={2}>
                        <Typography variant="h5">
                            Shop
                            <Box component={'span'} sx={{color: 'secondary.main', ml: 1, fontWeight: '100'}}>
                                6 in 1
                            </Box>
                        </Typography>

                        <Stack spacing={1}>
                            <Typography variant="body2">
                                Добро пожаловать!
                            </Typography>
                            <Typography variant="body2">
                                Магазин включает в себя 6 приложений, написанных с использованием Kotlin Multiplatform. Все
                                приложения использовать общий модуль и собственный пользовательский интерфейс для своих
                                платформ. Все платформы используют последние стек.
                            </Typography>
                        </Stack>

                        <Typography variant="caption">
                            © 2022 KeyGenQt
                        </Typography>
                    </Stack>
                </Box>

                <ButtonGroup
                    color="gray"
                    size="small"
                    variant="outlined"
                    aria-label="button group"
                >
                    <Button onClick={() => {
                        route.openUrlNewTab(ContactConf.telegram)
                    }}>
                        <Telegram/>
                    </Button>
                    <Button onClick={() => {
                        route.openEmail(ContactConf.email)
                    }}>
                        <EmailOutlined/>
                    </Button>
                    <Button onClick={() => {
                        route.scrollToTopSmooth()
                    }}>
                        <ArrowUpwardOutlined/>
                    </Button>
                </ButtonGroup>
            </Stack>
        </Box>
    );
}

AppFooter.propTypes = {
    disabled: PropTypes.bool,
};