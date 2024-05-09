import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50],
        },
      ],
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default Charts;
