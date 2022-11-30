import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import {AppToolbar} from "../toolbar/AppToolbar";
import {AppFooter} from "../footer/AppFooter";
import {ContainerLG} from "../containers/styled/Containers";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base";
import {useEffect, useRef} from "react";

let intervalID

/**
 * Layout base for app
 */
export function BaseLayout(props) {

    const {
        size = 'lg',
        cat = false,
        middle = false
    } = props

    const lottieRef = useRef();

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (cat && lottieRef.current) {
            clearInterval(intervalID)
            intervalID = setInterval(() => {
                lottieRef.current.stop();
                lottieRef.current.play();
            }, 7000)
        }
    }, [cat])

    return (
        <>
            <Box id={'page-scroll'} className={'custom-scroll'} sx={{
                height: '100%'
            }}>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={7}
                    sx={{minHeight: '100%'}}
                >
                    <ContainerLG>
                        <AppToolbar/>
                    </ContainerLG>

                    <Container maxWidth={size} sx={{
                        flexGrow: middle ? null : 1,
                    }}>
                        {props.children}
                    </Container>

                    <ContainerLG sx={{position: 'relative'}}>
                        {cat ? (
                            <Lottie
                                lottieRef={lottieRef}
                                loop={0}
                                animationData={ConstantLottie.cat}
                                style={{
                                    width: isMD ? 100 : 150,
                                    position: 'absolute',
                                    top: isMD ? -50 : -85,
                                    right: isMD ? 50 : 140
                                }}
                            />
                        ) : null}
                        <AppFooter/>
                    </ContainerLG>
                </Stack>
            </Box>
        </>
    )
}

BaseLayout.propTypes = {
    size: PropTypes.string,
    cat: PropTypes.bool,
    middle: PropTypes.bool,
    children: PropTypes.element.isRequired
};