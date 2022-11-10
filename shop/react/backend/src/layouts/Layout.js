import * as React from 'react';
import {useEffect} from 'react';
import {AppCard, AppMenu, AppTopBar} from "../components";
import PropTypes from "prop-types";
import {Grid, LinearProgress, Typography, useTheme} from "@mui/material";
import {MenuLayout} from "./MenuLayout";
import {linearProgressClasses} from "@mui/material/LinearProgress";
import {MethodsRequest, useRequest, useWindowResize} from "../base";
import {Save} from "@mui/icons-material";

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export function Layout(props) {

    const sizeWindow = useWindowResize()
    const {palette} = useTheme();

    const [isOpenMenu, setIsOpenMenu] = React.useState(sizeWindow.width > 1400);

    const {
        loading: loadingDiskSize,
        data: dataDiskSize,
        error: errorDiskSize,
    } = useRequest(MethodsRequest.common.diskSize);

    useEffect(() => {
        setIsOpenMenu(sizeWindow.width > 1400)
    }, [sizeWindow])

    return (
        <Grid id={'pageSelection'} className={"App section"} container spacing={0} rowSpacing={0} style={{
            height: '100%'
        }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <AppTopBar
                    isOpenMenu={isOpenMenu}
                    onChangeMenu={() => {
                        setIsOpenMenu(!isOpenMenu)
                    }}
                />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{
                height: 'calc(100% - 64px)'
            }}>
                <MenuLayout
                    isOpen={isOpenMenu}
                    onCloseMenu={() => {
                        setIsOpenMenu(false)
                    }}
                    content={props.children}>
                    <AppMenu
                        onChangeMenu={(isOpen) => {
                            setIsOpenMenu(isOpen)
                        }}
                    >
                        {!errorDiskSize ? <AppCard
                            type={'inline'}
                            color={'blueLight'}
                            variant={'circles2'}
                            isLoading={loadingDiskSize}
                            title={'Hard disk'}
                            subheader={bytesToSize(dataDiskSize?.blocks ?? 0)}
                            contentHeight={44}
                            icon={<Save/>}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography component="div" variant="caption" sx={{
                                        fontWeight: 'bold',
                                        color: palette.primary.dark
                                    }}>
                                        Space used
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{
                                    textAlign: 'right'
                                }}>
                                    <Typography component="div" variant="caption">
                                        {dataDiskSize?.use ?? 0}%
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <LinearProgress variant="determinate" value={dataDiskSize?.use ?? 0} sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        [`&.${linearProgressClasses.colorPrimary}`]: {
                                            backgroundColor: palette.primary.light,
                                        },
                                        [`& .${linearProgressClasses.bar}`]: {
                                            borderRadius: 5,
                                            backgroundColor: palette.primary.dark,
                                        },
                                    }}/>
                                </Grid>
                            </Grid>
                        </AppCard> : null}

                    </AppMenu>
                </MenuLayout>
            </Grid>
        </Grid>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};