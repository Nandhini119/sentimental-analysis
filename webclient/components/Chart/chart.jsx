import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);

}


  render() {
    var total = 0;
    for(var i=0;i<3;i++)
    {
    //  total+=this.props.gdata[i];
    }
    var percent=[];

    this.props.gdata.map((count)=>{
      if(count>0)
      percent.push(Math.round((count/total)*100))
      else {
        percent.push(0);
      }});

    let data = {
        labels : ['Good'+'('+percent[0]+'%)','Normal'+'('+percent[1]+'%)','Bad'+'('+percent[2]+'%)'],
        datasets : [
              {
                label : 'population',
                data : this.props.gdata,
                backgroundColor : [
                  'green',
                  'grey',
                  'red',
                ]
              }
              ]
            };
    return (
      <div className="chart">
        <Pie
        data = {data}
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
