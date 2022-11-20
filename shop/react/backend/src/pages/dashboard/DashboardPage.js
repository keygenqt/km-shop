import * as React from 'react';
import {Grid, Stack} from "@mui/material";
import {AppCard} from "../../components";
import {
    ListAltOutlined,
    LocalAtmOutlined,
    LocalShippingOutlined,
    StackedBarChartOutlined,
    TaskOutlined
} from "@mui/icons-material";
import {PercentDashboard} from "./elements/PercentDashboard";
import {ChartDashboard} from "./elements/ChartDashboard";
import {BestSellerDashboard} from "./elements/BestSellerDashboard";
import Typography from "@mui/material/Typography";

export function DashboardPage() {

    // @todo
    const [loading, setLoading] = React.useState(false);

    return (
        <Stack>
            <Grid container spacing={2}>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                    <AppCard
                        icon={TaskOutlined}
                        color={'primary.dark'}
                        variant={'circles'}
                        title={'Order Received'}
                        subheader={'From July 2020'}
                    >
                        <PercentDashboard
                            color={'primary.main'}
                            count={"1301"}
                            percent={10}
                            isPositive={true}
                        />
                    </AppCard>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                    <AppCard
                        icon={LocalShippingOutlined}
                        color={'success.dark'}
                        variant={'circles'}
                        title={'Order Deliver'}
                        subheader={'From July 2020'}
                    >
                        <PercentDashboard
                            color={'success.main'}
                            count={"402"}
                            percent={5}
                            isPositive={false}
                        />
                    </AppCard>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                    <AppCard
                        icon={LocalAtmOutlined}
                        color={'error.dark'}
                        variant={'circles'}
                        title={'Total Earnings'}
                        subheader={'Total in Month'}
                    >
                        <PercentDashboard
                            color={'error.main'}
                            count={
                                <Typography variant="h4" color={'error.dark'} sx={{
                                    fontSize: '32px'
                                }}>
                                    {'$ 1500.30'}
                                </Typography>
                            }
                        />
                    </AppCard>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12} min={12} null={12}>
                    <AppCard
                        icon={StackedBarChartOutlined}
                        color={'info.dark'}
                        variant={'lines'}
                        title={'Chart'}
                        subheader={'There will be a chart that will display some necessary data'}
                    >
                        <ChartDashboard/>
                    </AppCard>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                    <AppCard
                        icon={ListAltOutlined}
                        color={'secondary.dark'}
                        variant={'lines'}
                        title={'Best Seller'}
                        subheader={'Best completed orders'}
                    >
                        <BestSellerDashboard/>
                    </AppCard>
                </Grid>
            </Grid>

        </Stack>
    );
}

DashboardPage.propTypes = {};