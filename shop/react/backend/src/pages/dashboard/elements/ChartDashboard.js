import * as React from 'react';
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material";

export function ChartDashboard(props) {

    const {
        data
    } = props

    const {palette} = useTheme();

    return (
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
                    type: 'category',
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                },
            }}
            series={[{
                color: palette.success.main,
                name: 'Completed',
                data: data.series1
            }, {
                color: palette.error.main,
                name: 'Canceled',
                data: data.series2
            }]}
        />
    );
}

ChartDashboard.propTypes = {
    data: PropTypes.object.isRequired,
};