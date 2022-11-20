import * as React from 'react';
import {Grid, Skeleton, Stack} from "@mui/material";
import {AppCard, SnackbarError} from "../../components";
import {ListAltOutlined, LocalAtmOutlined, StackedBarChartOutlined, VerifiedOutlined} from "@mui/icons-material";
import {PercentDashboard} from "./elements/PercentDashboard";
import {ChartDashboard} from "./elements/ChartDashboard";
import {BestSellerDashboard} from "./elements/BestSellerDashboard";
import {HttpClient, useEffectTimout} from "../../base";

export function DashboardPage() {

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const [dataMadeOrders, setDataMadeOrders] = React.useState(null);
    const [dataOrdersCompleted, setDataOrdersCompleted] = React.useState(null);
    const [dataTotalEarnings, setDataTotalEarnings] = React.useState(null);
    const [dataSeller, setDataSeller] = React.useState(null);
    const [dataChart, setDataChart] = React.useState(null);

    // load
    useEffectTimout(async () => {
        try {
            // requests
            const dashboardMadeOrders = await HttpClient.get.dashboardMadeOrders()
            const dashboardOrdersCompleted = await HttpClient.get.dashboardOrdersCompleted()
            const dashboardTotalEarnings = await HttpClient.get.dashboardTotalEarnings()
            const dashboardChart = await HttpClient.get.dashboardChart()
            const dashboardSeller = await HttpClient.get.dashboardSeller()
            // set data
            setDataMadeOrders(dashboardMadeOrders)
            setDataOrdersCompleted(dashboardOrdersCompleted)
            setDataTotalEarnings({
                amount: dashboardTotalEarnings.amount.toFixed(2)
            })
            setDataChart(dashboardChart)
            setDataSeller(dashboardSeller.toArray().map((it) => ({
                id: it.id,
                primary: it.email ? it.email : it.phone,
                secondary: `Products: ${it.products.length}, Sum: ${it.sum.toFixed(2)}`,
            })))

            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }, [], () => [
        setLoading(true)
    ])

    return (
        <>
            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            <Stack>
                <Grid container spacing={2}>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                        <AppCard
                            disabled={loading}
                            icon={ListAltOutlined}
                            color={'primary.dark'}
                            variant={'circles'}
                            title={'Made Orders'}
                            subheader={'How many orders have been placed this month'}
                        >
                            <PercentDashboard
                                color={'primary.main'}
                                count={dataMadeOrders?.count ?? null}
                                percent={dataMadeOrders?.percent ?? null}
                            />
                        </AppCard>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                        <AppCard
                            disabled={loading}
                            icon={VerifiedOutlined}
                            color={'success.dark'}
                            variant={'circles'}
                            title={'Orders Completed'}
                            subheader={'How many orders were completed this month'}
                        >
                            <PercentDashboard
                                color={'success.main'}
                                count={dataOrdersCompleted?.count ?? null}
                                percent={dataOrdersCompleted?.percent ?? null}
                            />
                        </AppCard>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                        <AppCard
                            disabled={loading}
                            icon={LocalAtmOutlined}
                            color={'error.dark'}
                            variant={'circles'}
                            title={'Total Earnings'}
                            subheader={'Amount of completed orders this month'}
                        >
                            <PercentDashboard
                                color={'error.dark'}
                                count={dataTotalEarnings?.amount ?? null}
                            />
                        </AppCard>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12} min={12} null={12}>
                        <AppCard
                            disabled={loading}
                            icon={StackedBarChartOutlined}
                            color={'info.dark'}
                            variant={'lines'}
                            title={'Orders'}
                            subheader={'Statistics of orders made this year by month'}
                        >
                            {dataChart ? (
                                <ChartDashboard
                                    data={dataChart}
                                />
                            ) : (
                                <Skeleton
                                    variant={'rounded'}
                                    height={394}
                                    width={'100%'}
                                    sx={{
                                        marginBottom: '6px'
                                    }}
                                />
                            )}
                        </AppCard>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} min={12} null={12}>
                        <AppCard
                            disabled={loading}
                            icon={ListAltOutlined}
                            color={'secondary.dark'}
                            variant={'lines'}
                            title={'Best Seller'}
                            subheader={'Best completed orders'}
                        >
                            {dataSeller ? (
                                <BestSellerDashboard
                                    rows={dataSeller}
                                />
                            ) : (
                                <Skeleton
                                    variant={'rounded'}
                                    height={394}
                                    width={'100%'}
                                    sx={{
                                        marginBottom: '6px'
                                    }}
                                />
                            )}
                        </AppCard>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

DashboardPage.propTypes = {};