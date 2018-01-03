import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Trend Graph'
  },
  tooltips: {
    mode: 'label'
  },
  hover: {
    mode: 'dataset'
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Month'
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Value'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 250
        }
      }
    ]
  }
}


class Trend extends Component {
  constructor(props) {
    super(props);
        this.state = {
           data : {
          labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
          ],
          datasets: [
                {
                  label: "Good",
                  type : "line",
                  data: [100,150,200,75,100,50,200
                  ],
                  fill: false,
                  pointRadius: 0,
                 borderColor:   'rgba(255,99,132,0.6)',
                 backgroundColor:   'rgba(255,99,132,0.6)',
                 pointBorderColor:   'rgba(255,99,132,0.6)',
                 pointBackgroundColor:  'rgba(255,99,132,0.6)',
                 pointHoverBackgroundColor:  'rgba(255,99,132,0.6)',
                 pointHoverBorderColor:  'rgba(255,99,132,0.6)',
                }, {

                  label: 'Normal',
                  type : "line",
                  data: [500,100,20,250,45,256,300
                  ],
                    fill: false,
                    pointRadius: 0,
                   borderColor:   'rgba(54,162,235,0.6)',
                   backgroundColor:   'rgba(54,162,235,0.6)',
                   pointBorderColor:   'rgba(54,162,235,0.6)',
                   pointBackgroundColor:  'rgba(54,162,235,0.6)',
                   pointHoverBackgroundColor:  'rgba(54,162,235,0.6)',
                   pointHoverBorderColor:  'rgba(54,162,235,0.6)',
                }, {
                  label: "Bad",
                  type : "line",
                  data: [250,100,425,100,350,150,350
                  ],
                    fill: false,
                    pointRadius: 0,
                   borderColor:   'rgba(255,159,64,0.6)',
                   backgroundColor:   'rgba(255,159,64,0.6)',
                   pointBorderColor:  'rgba(255,159,64,0.6)',
                   pointBackgroundColor:  'rgba(255,159,64,0.6)',
                   pointHoverBackgroundColor:  'rgba(255,159,64,0.6)',
                   pointHoverBorderColor: 'rgba(255,159,64,0.6)',
                }
            ]
    }
      }
}

  render() {
    return (
      <div className="trend">
         <Line data={this.state.data} options = {options}/>

      </div>
    );
  }
}

export default Trend;
