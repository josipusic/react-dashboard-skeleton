import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
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
              type="donut"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DonutChart;