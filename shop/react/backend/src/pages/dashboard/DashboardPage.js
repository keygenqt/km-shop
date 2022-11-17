import * as React from 'react';
import {
    Avatar,
    Box,
    Button, Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppCard} from "../../components";
import {
    DashboardOutlined, DeleteOutline, FeedOutlined, FolderOutlined, ListAltOutlined,
    LocalAtmOutlined,
    LocalShippingOutlined,
    StackedBarChartOutlined,
    TaskOutlined
} from "@mui/icons-material";
import {PercentDashboard} from "./elements/PercentDashboard";
import ReactApexChart from "react-apexcharts";

function DeleteIcon() {
    return null;
}

export function DashboardPage() {
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
                            count={"$ 1500.30"}
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
                        <ReactApexChart
                            type="area"
                            height={385}
                            options={{
                                chart: {
                                    height: 350,
                                    type: 'area',
                                    toolbar: {
                                        show: false
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                stroke: {
                                    curve: 'smooth'
                                },
                                xaxis: {
                                    type: 'datetime',
                                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                                },
                                tooltip: {
                                    x: {
                                        format: 'dd/MM/yy HH:mm'
                                    },
                                },
                            }} series={[{
                            name: 'series1',
                            data: [31, 40, 28, 51, 42, 109, 100]
                        }, {
                            name: 'series2',
                            data: [11, 32, 45, 32, 34, 52, 41]
                        }]}   />
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
                        <Stack sx={{
                            marginTop: -1,
                            marginBottom: 1
                        }}>

                            <List>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <FeedOutlined />
                                        </IconButton>
                                    }
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <ListItemText
                                        primary="client@gmail.com"
                                        secondary={'Products: 16, Price: $ 1100.80'}
                                        sx={{
                                            '& .MuiTypography-body1': {
                                                fontSize: 16,
                                            },
                                            '& .MuiTypography-body2': {
                                                fontSize: 11,
                                            }
                                        }}
                                    />
                                </ListItem>

                                <Divider/>

                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <FeedOutlined />
                                        </IconButton>
                                    }
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <ListItemText
                                        primary="+1 (869) 304 23 80"
                                        secondary={'Products: 13, Price: $ 980.00'}
                                        sx={{
                                            '& .MuiTypography-body1': {
                                                fontSize: 16,
                                            },
                                            '& .MuiTypography-body2': {
                                                fontSize: 11,
                                            }
                                        }}
                                    />
                                </ListItem>

                                <Divider/>

                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <FeedOutlined />
                                        </IconButton>
                                    }
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <ListItemText
                                        primary="+1 (845) 618 11 88"
                                        secondary={'Products: 11, Price: $ 760.00'}
                                        sx={{
                                            '& .MuiTypography-body1': {
                                                fontSize: 16,
                                            },
                                            '& .MuiTypography-body2': {
                                                fontSize: 11,
                                            }
                                        }}
                                    />
                                </ListItem>

                                <Divider/>

                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <FeedOutlined />
                                        </IconButton>
                                    }
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <ListItemText
                                        primary="client2@gmail.com"
                                        secondary={'Products: 8, Price: $ 720.30'}
                                        sx={{
                                            '& .MuiTypography-body1': {
                                                fontSize: 16,
                                            },
                                            '& .MuiTypography-body2': {
                                                fontSize: 11,
                                            }
                                        }}
                                    />
                                </ListItem>

                                <Divider/>

                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <FeedOutlined />
                                        </IconButton>
                                    }
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <ListItemText
                                        primary="client3@gmail.com"
                                        secondary={'Products: 4, Price: $ 320.30'}
                                        sx={{
                                            '& .MuiTypography-body1': {
                                                fontSize: 16,
                                            },
                                            '& .MuiTypography-body2': {
                                                fontSize: 11,
                                            }
                                        }}
                                    />
                                </ListItem>

                            </List>

                            <Box sx={{
                                marginTop: '5px'
                            }}>
                                <Button
                                    variant="outlined"
                                    color={'secondary'}
                                >
                                    View All
                                </Button>
                            </Box>
                        </Stack>
                    </AppCard>
                </Grid>
            </Grid>


        </Stack>
    );
}

DashboardPage.propTypes = {};