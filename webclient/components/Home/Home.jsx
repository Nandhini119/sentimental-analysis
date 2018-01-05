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
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import './home.css';

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
      from : " ",
      end: " ",
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
    //console.log('fromDate: ', getDateString(fromDate));
    //console.log('endDate: ', getDateString(endDate));
    self.setState({
      from: getDateString(endDate),
      end:getDateString(fromDate)
    })
   $.ajax({
             url: '/getFeedback',
             type: 'POST',
             data: {
               fromDate: getDateString(endDate),
               endDate: getDateString(fromDate)
             },
             success: function(response) {
                // console.log(response.line_chart);
                 var chart_response = response.piechart;
                 var chart_data = [];
                 var line_data = [];
                 //console.log("chart_response",chart_response)
                chart_data.push(chart_response.good);
                chart_data.push(chart_response.normal);
                chart_data.push(chart_response.bad);
                line_data.push(response.line_chart);
                self.setState({chart_data});
                self.setState({line_data})
                //console.log("line_data state",line_data);
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
    //console.log('fromDate: ', self.state.fromDate);
    if(!(this.state.fromDate.length <= 1 || this.state.endDate.length <=1 )) {
      $.ajax({
              url: "/getFeedback",
              type: 'POST',
              data: {
                  fromDate: self.state.fromDate,
                  endDate: self.state.endDate
              },
              success: function(response) {
                //console.log(response.piechart);
                var chart_response = response.piechart;
                var chart_data = [];
                 var line_data = [];
                 self.setState({
                   from: self.state.fromDate,
                   end:self.state.endDate
                 })
                //console.log("chart_response",chart_response)
               chart_data.push(chart_response.good);
               chart_data.push(chart_response.normal);
               chart_data.push(chart_response.bad);
               line_data.push(response.line_chart);
               self.setState({chart_data});
               self.setState({line_data})
               //console.log("chart_data state",line_data)
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
 return(<div  style = {styles.background}><Menu  inverted style = {styles.appbar}>
        <Menu.Item header>Sentimental Analysis</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'  onClick={this.handleLogout} />
        </Menu.Menu>
      </Menu>
      {/*} <Form onSubmit = {this.handleAnalysis}></Form>*/}
      <Grid columns={2} relaxed>
        <Grid.Column>
            <Segment basic>
            <Form onSubmit = {this.handleAnalysis}>
            <DatePicker style = {styles.calendar} hintText="From date" maxDate={new Date()}  onChange = {this.handleFromDate}/>
            <DatePicker style = {styles.calendar} hintText="End date" maxDate={new Date()} onChange = {this.handleEndDate} />
              <Button type='submit'>Get Analysis</Button>
            </Form>
              {/*}<Grid columns={2} relaxed>
                <Grid.Column>
                    <Segment basic>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                      <Segment basic>
                      <DatePicker style = {styles.calendar} hintText="From date" maxDate={new Date()}  onChange = {this.handleFromDate}/>
                      </Segment>
                  </Grid.Column>
              </Grid>*/}
              <Segment id="line_segment">
              <Header as='h2' textAlign='center'>Weekly Report from {this.state.from} to {this.state.end}</Header>
              <Line  lineData = {this.state.line_data}/>
              </Segment>
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic className = "chart">
          <Form onSubmit = {this.handleAnalysis}>
          <TextField
      hintText="AdId"/>
          <DatePicker style = {styles.calendar} hintText="From date" maxDate={new Date()}  onChange = {this.handleFromDate}/>
          <DatePicker style = {styles.calendar} hintText="End date" maxDate={new Date()} onChange = {this.handleEndDate} />
            <Button type='submit'>Get Analysis</Button>
          </Form>
        {/*}  <Grid columns={2} relaxed>
            <Grid.Column>
                <Segment basic>
                <DatePicker style = {styles.calendar} hintText="End date" maxDate={new Date()} onChange = {this.handleEndDate} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment basic>
                        <Button type='submit'>Get Analysis</Button>
                  </Segment>
              </Grid.Column>
          </Grid>*/}
          <Segment id="line_segment">
          <Header as='h2' textAlign='center'>Consolidated Weekly Report from {this.state.from} to {this.state.end}</Header>
            <Chart gdata={this.state.chart_data}/>
          </Segment>
          </Segment>
        </Grid.Column>
  </Grid>


      </div>);
 }
 }

 module.exports = Home;
