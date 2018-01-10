import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const options = {
  legend: {
            display: false
         },
  responsive: true,
  title: {
    display: false,
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
          display: true,
          labelString: 'Days'
        },
        ticks : {
          callback : function(labels) {
            return labels.slice(0, 10);
          }
       }
      }
    ],

    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'emotion rating'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 15
        }
      }
    ]
  }
}



class Trend extends Component {
  constructor(props) {
    super(props);
        this.state = {
           dates:[],
           rating : []
        }
      }



  render() {
    console.log("line_chart props",this.props.lineData);
    var dates = [];
    var rating = [];
    if(this.props.lineData.length > 0) {
      this.props.lineData[0].map((datas,index) =>{
        console.log("graph data",datas);
        dates.push(datas.emotion);
        rating.push(datas.rating/datas.count)

      });
    }

    let getData =   {
      labels: dates,
      datasets: [
           {

             type : "line",
             data: rating,
             fill: false,
             pointRadius: 0,
            borderColor:   'green',
            backgroundColor:   'green',
            pointBorderColor:   'green',
            pointBackgroundColor:  'green',
            pointHoverBackgroundColor:  'green',
            pointHoverBorderColor:  'green',
          },
       ]
      }


    return (
      <div className="trend">
         <Line data={getData} options = {options}/>
      </div>
    );
  }
}

export default Trend;
