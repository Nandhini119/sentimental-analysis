import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider } from 'semantic-ui-react'
import Chart from '../Chart/chart.js';
import Line from '../Chart/line.js';

const styles = {
appbar : {
backgroundColor : "",
}
}
 class Home extends React.Component {
 constructor() {
 super();
 this.handleLogout = this.handleLogout.bind(this);
 }
handleLogout() {
hashHistory.push('/');

}
 render() {
 return(<div style = {styles.background}><Menu  inverted style = {styles.appbar}>
        <Menu.Item header>Sentimental Analysis</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'  onClick={this.handleLogout} />
        </Menu.Menu>
      </Menu>
      <div class="ui segment">
        <h2 class="ui header" textAlign="center">Weekly report</h2>
      </div>
      <Grid columns={2} relaxed>
    <Grid.Column>
      <Segment basic>
      <Line/>
      </Segment>
    </Grid.Column>
    <Divider vertical>Or</Divider>
    <Grid.Column>
      <Segment basic>
        <Chart/>
      </Segment>
    </Grid.Column>

  </Grid>
      </div>);
 }
 }

 module.exports = Home;
