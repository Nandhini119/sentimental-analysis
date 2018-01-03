import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider } from 'semantic-ui-react'
import Chart from '../Chart/chart.js';
import Line from '../Chart/line.js';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import './home.css';

const styles = {
appbar : {
backgroundColor : "",
},
calendar : {
  size : "50px",
}
}
 class Home extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
      startDate: moment()
    };
 this.handleLogout = this.handleLogout.bind(this);
 this.handleChange = this.handleChange.bind(this);
 }
handleLogout() {
hashHistory.push('/');

}
handleChange(date) {
    this.setState({
      startDate: date
    });
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
                      <DatePicker style = {styles.calendar} hintText="From date" container="inline" />
                      </Segment>
                  </Grid.Column>
              </Grid>
              <Line/>
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic className = "chart">
          <Grid columns={2} relaxed>
            <Grid.Column>
                <Segment basic>
                <DatePicker style = {styles.calendar} hintText="End date" container="inline" />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment basic>

                  </Segment>
              </Grid.Column>
          </Grid>

            <Chart/>
          </Segment>
        </Grid.Column>
  </Grid>
      </div>);
 }
 }

 module.exports = Home;
