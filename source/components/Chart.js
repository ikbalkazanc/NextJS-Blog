import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class DataChart extends React.Component {

    render() {
        const data = []
        var i;
        for (i = 0; i < 20; i++) {
            data.push({ argument: i, value: Math.floor(Math.random() * 100) })
        }
        return (
            <Card style={{

            }}>
                <CardHeader
                    title="Grafik"
                    subheader="Zaman-Değer Grafiği"
                />
                <CardContent style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    
                    <Chart
                        data={data}
                        width={300}
                        height={300}
                    >
                        <ArgumentAxis />
                        <ValueAxis />
                        <LineSeries valueField="value" argumentField="argument" />
                    </Chart>
                </CardContent>
            </Card >
        )
    }
}


