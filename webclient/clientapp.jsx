const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, hashHistory, Route, Router,IndexRoute} = require('react-router');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const login = require('./components/Login/Login.jsx');
const Home = require('./components/Home/Home.jsx');

const MainComp = React.createClass({

  render: function() {
    return (
              <div>
                  <NavBar/>
                  <br/>
                  <br/>
                  {this.props.children}
              </div>
    );
  }
});
ReactDOM.render(
<MuiThemeProvider>
  <Router history={hashHistory}>
    <Route exact = {true} path="/" component={login}/>
    <Route path = "/home" component = {Home}/>
  </Router>
  </MuiThemeProvider>, document.getElementById('app'));
