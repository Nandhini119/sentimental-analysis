import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          chartData : {
              labels : ['positive','neutral','negative'],
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
      <div className="Chart">
        <Pie
        width = {10}
        height = {500}
        data = {this.state.chartData}
        options = {{title : {
        	display : this.props.displayTitle,
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
