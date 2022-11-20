import * as React from 'react';
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

export function ChartDashboard(props) {

    const {
        data
    } = props

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
            data: data.series1
        }, {
            name: 'series2',
            data: data.series2
        }]}/>
    );
}

ChartDashboard.propTypes = {
    data: PropTypes.object.isRequired,
};