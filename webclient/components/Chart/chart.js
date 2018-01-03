import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          chartData : {
              labels : ['Good','neutral','Bad'],
              datasets : [
                    {
                      label : 'population',
                      data : [
                        10,3,4,
                      ],
                      backgroundColor : [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,159,64,0.6)',
                      ]
                    }
                    ]
      }
  }
}
  render() {
    return (
      <div className="chart">
        <Pie
        data = {this.state.chartData}
        options = {{title : {
        	display : true,
        	text : 'Sentimental Analysis'
        },
        maintainAspectRatio: false,
        legend : {
        	display : true,
        	position : "right"
        }}}/>


      </div>
    );
  }
}

export default Chart;
