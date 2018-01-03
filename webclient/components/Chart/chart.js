import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    var total=0;
    for(var i=0;i<3;i++)
    {
      total+=this.props.data[i];
    }
    var percent=[];
    this.props.data.map((count)=>{percent.push(Math.round((count/total)*100))});
    console.log(percent);
    this.state = {
          chartData : {
              labels : ['Good'+'('+percent[0]+'%)','Neutral'+'('+percent[1]+'%)','Bad'+'('+percent[2]+'%)'],
              datasets : [
                    {
                      label : 'population',
                      data : this.props.data,
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
          tooltips:{
            display:false

          }
        },
        responsive: true,
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
