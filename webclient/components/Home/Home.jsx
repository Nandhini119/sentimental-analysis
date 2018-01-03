import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider, Header } from 'semantic-ui-react'
import Chart from '../Chart/chart.js';
import Line from '../Chart/line.js';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import './home.css';

var chart_response={Good:68,Neutral:78,Bad:90};
var chart_data=[];
for(var mood in chart_response)
{
  chart_data.push(chart_response[mood]);
}
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
      startDate: moment(),
      chart_data:chart_data
    };
 this.handleLogout = this.handleLogout.bind(this);
 this.handleFromDate = this.handleFromDate.bind(this);
 this.handleEndDate = this.handleEndDate.bind(this);
 }
handleLogout() {
hashHistory.push('/');

}
handleFromDate(e,value) {
  alert(value);
    // this.setState({
    //   startDate: date
    // });
  }
  handleEndDate(e,value) {

    }
 render() {
 return(<div style = {styles.background}><Menu  inverted style = {styles.appbar}>
        <Menu.Item header>Sentimental Analysis</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'  onClick={this.handleLogout} />
        </Menu.Menu>
      </Menu>
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
                      <DatePicker style = {styles.calendar} hintText="From date" onChange = {this.handleFromDate} container="inline" />
                      </Segment>
                  </Grid.Column>
              </Grid>
              <Segment>
                <Header as='h2' textAlign='center'>Weekly Report</Header>
                <Line/>
              </Segment>
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic className = "chart">
          <Grid columns={2} relaxed>
            <Grid.Column>
                <Segment basic>
                <DatePicker id="end" inputStyle={{color: 'white'}} hintText="End date" onChange = {this.handleEndDate} container="inline" />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment basic>

                  </Segment>
              </Grid.Column>
          </Grid>
          <Segment>
            <Header as='h2' textAlign='center'>Consolidated Weekly Report</Header>
            <Chart data={chart_data}/>
          </Segment>
          </Segment>
        </Grid.Column>
  </Grid>
      </div>);
 }
 }

 module.exports = Home;
