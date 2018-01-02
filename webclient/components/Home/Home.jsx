import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider } from 'semantic-ui-react'
import Chart from '../Chart/chart.js';

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
      <Grid columns={4} relaxed>
    <Grid.Column>
      <Segment basic>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      </Segment>
    </Grid.Column>
    <Divider vertical>Or</Divider>
    <Grid.Column>
      <Segment basic>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      </Segment>
    </Grid.Column>
    <Divider vertical>And</Divider>
    <Grid.Column>
      <Segment basic>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      </Segment>
    </Grid.Column>
  </Grid>
      <Chart/></div>);
 }
 }

 module.exports = Home;
