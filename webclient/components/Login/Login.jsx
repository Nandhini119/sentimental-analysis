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
    this.state = { username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            currentUser: 'none',
            status:'false',};
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
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
        if(this.state.username.length == 0 || this.state.password.length == 0) {
          alert("please enter credentials");

        }else {
          this.setState({ status : true})
          hashHistory.push("/home");
        }


                    // superagent
                    //     .post('/login')
                    //     .send({
                    //         username: self.state.username,
                    //         password: self.state.password
                    //     })
                    //     .end(function(err, res) {
                    //         if (res.body.message === "success") {
                    //           console.log("success");
                    //         this.setState({
                    //         status: true
                    //         })
                    //         } else {
                    //           console.log("error");
                    //         }
                    //     });

            }
    //         onDetails() {
    //         superagent
    //             .post('/login')
    //             .send({
    //
    //             })
    //             .end(function(err, res) {
    //                 if (res.body.message === "success") {
    //                   console.log("success");
    //
    //                 } else {
    //                   console.log("error");
    //                 }
    //             });
    //
    // }


  render() {
    return (
      <div >
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
      </div>
    );
  }
}

module.exports = Login;
