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
          show: true,
          labelString: 'Value'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 50
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
           good : [],
           bad : [],
           normal : [],
        }
      }



  render() {
    console.log("line_chart props",this.props.lineData);
    var dates = [];
    var good = [];
    var bad = [];
    var normal = [];
    // console.log('typeof lineData', typeof this.props.lineData);
    // var data=this.props.lineData[0];
    // console.log("data",data);
    // console.log("data length",data.length);
    if(this.props.lineData.length > 0) {
      this.props.lineData[0].map((datas,index) =>{
  // console.log("datas, index", datas,index);
        dates.push(datas.date);
        good.push(datas.good);
        bad.push(datas.bad);
        normal.push(datas.normal);
      });
    }

    let getData =   {
      labels: dates,
      datasets: [
           {
             label: "Good",
             type : "line",
             data: good,
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
             data: normal,
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
             data: bad,
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


    return (
      <div className="trend">
         <Line data={getData} options = {options}/>
      </div>
    );
  }
}

export default Trend;
