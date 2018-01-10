import React from 'react';
import {  Link,Redirect } from 'react-router-dom';
const { hashHistory} = require('react-router');
import {
    Paper,
    FlatButton,
    RaisedButton,
    TextField
} from 'material-ui';
import {
    Row,
    Col
} from 'react-flexbox-grid';
import Accountcircle from 'material-ui/svg-icons/action/perm-identity';
import Password from 'material-ui/svg-icons/action/lock-outline';
import superagent from 'superagent';
import './login.css';

const styles = {
    paperstyle: {
        width: 400,
        marginTop: 150,
        textAlign: 'center',
        display: 'inline-block',
        height : 300


    },
    button : {
      margin : 10,
    }
    }
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            currentUser: 'none',
            status: " ",
        }
        this.onLogin = this.onLogin.bind(this);
        this.validationSuccess = this.validationSuccess.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onUsernameChange(event) {
        this.setState({
            usernameError: '',
            username: event.target.value
        });
    }

    onPasswordChange(event) {
            this.setState({
                passwordError: '',
                password: event.target.value
            });
        }

        onLogin() {
        console.log("inside login function");
        let self=this;

        if (this.validationSuccess()) {
                 superagent
                     .post('/login')
                     .send({
                         username: self.state.username,
                         password: self.state.password
                     })
                     .end(function(err, res) {
                       console.log("response",res)
                         if (err) {
                             if (res.body.message === 'Invalid User') alert('Invalid User!');
                             else alert('Server Error! Try after some time.');
                         } else {
                             self.setState({
                                 currentUser: res.body.user.type
                             });
                                // set username to localstorage to protect client routes after logout
                                 localStorage.setItem('username', res.body.user.username);

                         }
                     });
             }
          //hashHistory.push("/adminhome");


            }
            /*to validate the data  that user has entered*/
              validationSuccess() {
                  if (this.state.username.trim().length == 0) {
                      this.setState({
                          usernameError: "Username cannot be empty"
                      });
                  } else if (this.state.password.trim().length == 0) {
                      this.setState({
                          passwordError: "Password cannot be empty"
                      });
                  } else {
                      return true;
                  }
                  return false;
              }


  render() {
    return (
      <div  >
        <Row center='xs'>
          <Paper style={styles.paperstyle} zDepth = {1} >
          <h4 style = {styles.button}>Sentimental Analysis</h4>
                  <TextField
                    hintText="Username"
                    value={this.state.username}
                    errorText={this.state.usernameError}
                    floatingLabelText={<Accountcircle/>}
                    onChange={this.onUsernameChange} /><br/><br/>
                    <TextField
                       hintText="Password"
                       type="password"
                       value={this.state.password}
                       errorText={this.state.passwordError}
                       floatingLabelText={<Password/>}
                       onChange={this.onPasswordChange} /><br /><br/>

                       <RaisedButton label="Log In" style = {styles.button} primary={true} onClick = {this.onLogin} />
          </Paper>
        </Row>
        {  this.state.currentUser === 'user' ? hashHistory.push("/userhome") :
            this.state.currentUser === 'admin' ? hashHistory.push("/adminhome") :''}
      </div>
    );
  }
}

module.exports = Login;
