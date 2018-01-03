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
        // ticks : {
        //   callback : function(label) {
        //     return new Date(label).getDate()+"-"+new Date(label).getMonth();
        //   }
        // }
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
          suggestedMax: 100
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



  componentWillMount()
  {
        var dates = [];
        var good = [];
        var bad = [];
        var normal = [];
        this.props.lineData.map((datas,index) =>{
          dates.push(datas.Date);
          good.push(datas.Good);
          bad.push(datas.Bad);
          normal.push(datas.Normal);
        this.setState({ dates });
         this.setState({ good });
         this.setState({ bad });
          this.setState({ normal });
        });
  }


  getData() {
    return (
      {
      labels: this.state.dates,
      datasets: [
           {
             label: "Good",
             type : "line",
             data: this.state.good,
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
             data: this.state.normal,
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
             data: this.state.bad,
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
    )
  }

  render() {
    return (
      <div className="trend">
         <Line data={this.getData()} options = {options}/>
      </div>
    );
  }
}

export default Trend;
