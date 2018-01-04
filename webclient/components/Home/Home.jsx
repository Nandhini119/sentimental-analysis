import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider, Header } from 'semantic-ui-react'
import Chart from '../Chart/chart.jsx';
import Line from '../Chart/line.js';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import { Form,Button } from 'semantic-ui-react';
import $ from 'jquery';
import './home.css';

import './home.css';

var lineData= [
      {
        "Date" : "1.12.17",
        "Good" : 100,
        "Normal" : 8,
        "Bad" : 7,

    },

      {
        "Date" : "2.12.17",
        "Good" : 8,
        "Normal" : 6,
        "Bad" : 7,
      },

    {

        "Date" : "3.12.17",
        "Good" : 6,
        "Normal" : 8,
        "Bad" : 5,
      },

    {

        "Date" : "4.12.17",
        "Good" : 10,
        "Normal" : 8,
        "Bad" : 3,
      },

    {

        "Date" : "5.12.17",
        "Good" : 8,
        "Normal" : 10,
        "Bad" : 4,
      },

      {
        "Date" : "6.12.17",
        "Good" : 8,
        "Normal" : 7,
        "Bad" : 9,
      },

      {
        "Date" : "7.12.17",
        "Good" : 9,
        "Normal" : 8,
        "Bad" : 5,
      }

]




const styles = {
appbar : {
backgroundColor : "",
},
calendar : {
  size : "50px",
  // pointHoverBackgroundColor : "white",
  color: "white !important",
  textColor : "#FFFFFF",
}
}
 class Home extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
      fromDate : " ",
      endDate : " ",
      currentDate : "",
      chart_data : [],
      line_data : [],
    };
 this.handleLogout = this.handleLogout.bind(this);
 this.handleFromDate = this.handleFromDate.bind(this);
 this.handleEndDate = this.handleEndDate.bind(this);
 this.handleAnalysis = this.handleAnalysis.bind(this);
 }
 componentWillMount() {
   let now = new Date().getTime();
   let sevenDaysBack = now - (1000 * 3600 * 24 * 7);
   let fromDate = new Date(now);
   let self = this;
   let endDate = new Date(sevenDaysBack);
   let getDateString = function(date) {
     let dd = date.getDate() + '';
     // dd = dd.length === 1 ? '0'+ dd : dd;
     let MM = (date.getMonth() + 1) + '';
     MM = MM.length === 1 ? '0'+ MM : MM;
     let yyyy = date.getFullYear() + '';
     return dd + '-' + MM + '-' + yyyy;
   }
    console.log('fromDate: ', getDateString(fromDate));
   $.ajax({
             url: '/getFeedback',
             type: 'POST',
             data: {
               fromDate: '2-01-2018',
               endDate: '3-01-2018'
             },
             success: function(response) {
                 console.log(response.piechart);
                 var chart_response = response.piechart;
                 var chart_data = [];
                 console.log("chart_response",chart_response.good)
                chart_data.push(chart_response.good);
                chart_data.push(chart_response.normal);
                chart_data.push(chart_response.bad);
                self.setState({chart_data});
                console.log("chart_data state",chart_data)
                             },
                             error: function(err) {
                                 alert("error in getting analysis");
                                 }
                 });
 }

handleLogout() {
hashHistory.push('/');

}
handleFromDate(event,date) {
var dmy = new Date(date).getDate()+"-"+new Date(date).getMonth()+1+"-"+new Date(date).getFullYear();
    this.setState({
      fromDate: dmy
    });
  }
  handleEndDate(event,date) {
  var dmy = new Date(date).getDate()+"-"+new Date(date).getMonth()+1+"-"+new Date(date).getFullYear()
  this.setState({
    endDate: dmy
  });

  }
  handleAnalysis()
  {
    let self = this;
    console.log('fromDate: ', self.state.fromDate);
    if(!(this.state.fromDate.length <= 1 || this.state.endDate.length <=1 )) {
      
      $.ajax({
              url: "/getFeedback",
              type: 'POST',
              data: {
                  fromDate: self.state.fromDate,
                  endDate: self.state.endDate
              },
              success: function(response) {
                console.log(response.piechart);
                var chart_response = response.piechart;
                var chart_data = [];
                console.log("chart_response",chart_response)
               chart_data.push(chart_response.good);
               chart_data.push(chart_response.normal);
               chart_data.push(chart_response.bad);
               self.setState({chart_data});
               console.log("chart_data state",chart_data)

              },
              error: function(err) {
                  alert("error in getting analysis");
              }
          })
    } else {
      alert("please enter from and end date");
    }
  }

 render() {
 return(<div style = {styles.background}><Menu  inverted style = {styles.appbar}>
        <Menu.Item header>Sentimental Analysis</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'  onClick={this.handleLogout} />
        </Menu.Menu>
      </Menu>
      <Form onSubmit = {this.handleAnalysis}>
      <Grid columns={2} relaxed>
        <Grid.Column>
            <Segment basic>
              <Grid columns={2} relaxed>
                <Grid.Column>
                    <Segment basic>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                      <Segment basic>
                      <DatePicker style = {styles.calendar} hintText="From date"   onChange = {this.handleFromDate}/>
                      </Segment>
                  </Grid.Column>
              </Grid>
            {/*  <Segment>
              <Header as='h2' textAlign='center'>Weekly Report</Header>
              <Line  lineData = {lineData}/>
              </Segment>*/}
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic className = "chartPie">
          <Grid columns={2} relaxed>
            <Grid.Column>
                <Segment basic>
                <DatePicker style = {styles.calendar} hintText="End date"  onChange = {this.handleEndDate} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment basic>
                        <Button type='submit'>Get Analysis</Button>
                  </Segment>
              </Grid.Column>
              </Grid>


          </Segment>
        </Grid.Column>
        </Grid>
  </Form>

  <Grid columns={1} relaxed className="chart">
<Header as='h2' align='center'>Consolidated Weekly Report</Header>
<Chart gdata={this.state.chart_data}/>
</Grid>

      </div>);
 }
 }

 module.exports = Home;
