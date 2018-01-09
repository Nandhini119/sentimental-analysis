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
          display: true,
          labelString: 'Days'
        },
        ticks : {
          callback : function(label) {
            return label.slice(0, 10);
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
    // console.log('typeof lineData', typeof this.props.lineData);
    // var data=this.props.lineData[0];
    // console.log("data",data);
    // console.log("data length",data.length);
    if(this.props.lineData.length > 0) {
      this.props.lineData[0].map((datas,index) =>{
        //console.log("datas, index", datas,index);
        dates.push(datas.date);
        rating.push(datas.rating/datas.count)

      });
    }

    let getData =   {
      labels: dates,
      datasets: [
           {
             label: "emotional change",
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
