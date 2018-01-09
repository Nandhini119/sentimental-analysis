import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Input, Menu,Dropdown, Table } from 'semantic-ui-react';
const { hashHistory} = require('react-router');
import { Grid, Segment, Divider, Header } from 'semantic-ui-react'
import Chart from '../Chart/chart.jsx';
import Line from '../Chart/line.js';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import { Form,Button } from 'semantic-ui-react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {
    Row,
    Col
} from 'react-flexbox-grid'
import $ from 'jquery';
import './home.css';

const styles = {
appbar : {
backgroundColor : "",
},
fromcalendar : {
marginTop : "9px",
},
endcalendar : {
marginTop : "9px"
},
headline: {
   fontSize: 24,
   paddingTop: 16,
   marginBottom: 12,
   fontWeight: 400,
 },
 tabs : {
   backgroundColor : "grey",
 },
 customWidth: {
   width: 200,
 },
 button : {
   margin : "10px",
 },
 dropdown : {
   marginTop : "9px",
   width : "70%",
 }
}
 class Home extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
      fromDate : " ",
      endDate : " ",
      currentDate : "",
      line_data : [],
      from : " ",
      end: " ",
      group_value : 1,
      adid_value : 1,
      group : "",
      adid : "",
      adid_arr : [],
      table_arr :"",
      H_H : 0,M_H:0,L_H:0,
      H_S :0,M_S :0,L_S:0,
      H_AN : 0,M_AN :0,L_AN :0,
      H_AF : 0,M_AF : 0,L_AF : 0,
      H_AS : 0,M_AS :0,L_AS : 0,
    };
 this.handleLogout = this.handleLogout.bind(this);
 this.handleFromDate = this.handleFromDate.bind(this);
 this.handleEndDate = this.handleEndDate.bind(this);
  this.handleAdId = this.handleAdId.bind(this);
 this.handleAnalysis = this.handleAnalysis.bind(this);
 this.handleDropDownGroup = this.handleDropDownGroup.bind(this);
  this.handleDropDownAdId = this.handleDropDownAdId.bind(this);
 this.handleActiveTab = this.handleActiveTab.bind(this);
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
      url : '/adid',
      type : 'GET',
      data : {},
      success : function(response){
        var array =[];
        console.log("response",response.adid);
        response.adid.map((adid,index) => {
          array.push({key: index, value: adid, text: adid})
        })
        self.setState({adid_arr : array});

          console.log("sdud ",self.state.adid_arr);
      },
      error : function(err){
        console.log("error",err);
      }
    })
 }
 handleDropDownGroup(event, a){
   this.setState({group_value:value});
 }
 handleDropDownAdId(event,a){
   this.setState({adid_value : a.value});
   this.setState({H_H : 0,M_H:0,L_H:0,
   H_S :0,M_S :0,L_S:0,
   H_AN : 0,M_AN :0,L_AN :0,
   H_AF : 0,M_AF : 0,L_AF : 0,
   H_AS : 0,M_AS :0,L_AS : 0})
 }
handleLogout() {
hashHistory.push('/');
}
handleActiveTab() {
}
handleFromDate(event,date) {
var dmy = new Date(date).getDate()+"-"+new Date(date).getMonth()+1+"-"+new Date(date).getFullYear();
    this.setState({
      fromDate: dmy
    });
  }
  handleAdId(event) {
    var adid = event.target.value;

    this.setState({adid});
  }
  handleEndDate(event,date) {
  var dmy = new Date(date).getDate()+"-"+new Date(date).getMonth()+1+"-"+new Date(date).getFullYear()
  this.setState({
    endDate: dmy
  });

  }
  handleAnalysis()
  {

    console.log(this.state.fromDate,this.state.endDate,this.state.adid_value);
    let self = this;
    //console.log('fromDate: ', self.state.fromDate);
    if(!(this.state.fromDate.length <= 1 || this.state.endDate.length <=1 ) ) {
      if(this.state.fromDate == this.state.endDate) {
        //table data
          var table_array = [];

            $.ajax({
              url : '/table_analysis',
              type : 'GET',
              data : {
                fromDate: self.state.fromDate,
                endDate: self.state.endDate,
                adid : this.state.adid_value
              },
              success : function(response) {
                console.log("table response",response.table);
                  table_array.push(response.table);
                  self.setState({table_arr : table_array});
                  console.log("table",self.state.table_arr);
                  response.table.map((data,index) => {
                    console.log("data",data)
                    if(data.emotion == "High_Happy") {
                      console.log("dfg")
                      self.setState({H_H : data.count})
                    } else if(data.emotion == "Medium_Happy") {
                       self.setState({M_H : data.count});
                    } else if(data.emotion == "Low_Happy") {
                       self.setState({L_H : data.count});
                    } else if(data.emotion == "High_Sad") {
                       self.setState({H_S : data.count});
                    } else if(data.emotion == "Medium_Sad") {
                       self.setState({M_S : data.count});
                    } else if(data.emotion == "Low_Sad") {
                       self.setState({L_S : data.count});
                    } else if(data.emotion == "High_Angry") {
                       self.setState({H_AN : data.count});
                    } else if(data.emotion == "Medium_Angry") {
                       self.setState({M_AN : data.count});
                    } else if(data.emotion == "Low_Angry") {
                       self.setState({L_AN : data.count});
                    } else if(data.emotion == "High_Afraid") {
                       self.setState({H_AF : data.count});
                    } else if(data.emotion == "Medium_Afraid") {
                       self.setState({M_AF : data.count});
                    } else if(data.emotion == "Low_Afraid") {
                       self.setState({L_AF : data.count});
                    } else if(data.emotion == "High_Ashamed") {
                       self.setState({H_AS : data.count});
                    } else if(data.emotion == "Medium_Ashamed") {
                       self.setState({M_AS : data.count});
                    } else if(data.emotion == "Low_Ashamed") {
                       self.setState({L_AS : data.count});
                    } else {

                    }
                  })

              },
              error : function(err) {
                console.log("error",err);
              }
            })

      } else {
        //graph data
        console.log("adid",this.state.adid_value.length);
        if(this.state.adid_value.length >=1 ) {
          console.log("dsfdGF")
          //for all employee in a group
          $.ajax({
            url : '/group_analysis',
            type : 'GET',
            data : {
              fromDate: self.state.fromDate,
              endDate: self.state.endDate,
              adid : this.state.adid_value
            },
            success : function(response) {
              console.log("response",response);

            },
            error : function(err) {
              console.log("error",err);
            }
          })

        } else {
            console.log("adidfghf",this.state.adid_value);
            $.ajax({
              url : '/group_analysis',
              type : 'GET',
              data : {
                fromDate: self.state.fromDate,
                endDate: self.state.endDate,
                adid : this.state.adid_value
              },
              success : function(response) {
                console.log("response",response);
                var line_data = [];
                          self.setState({
                            from: self.state.fromDate,
                            end:self.state.endDate
                          })
                         //console.log("chart_response",chart_response)
                        line_data.push(response.line_chart);
                        self.setState({line_data})
                        console.log("line graph data",self.state.line_data);
              },
              error : function(err) {
                console.log("error",err);
              }
            })
          //for particular employee in a group
        }
      }
      // $.ajax({
      //         url: "/getFeedback",
      //         type: 'POST',
      //         data: {
      //             fromDate: self.state.fromDate,
      //             endDate: self.state.endDate,
      //             adid : self.state.adid
      //         },
      //         success: function(response) {
      //            var line_data = [];
      //            self.setState({
      //              from: self.state.fromDate,
      //              end:self.state.endDate
      //            })
      //           //console.log("chart_response",chart_response)
      //          line_data.push(response.line_chart);
      //          self.setState({line_data})
      //          //console.log("chart_data state",line_data)
      //         },
      //         error: function(err) {
      //             alert("error in getting analysis");
      //         }
      //     })
    } else {
      alert("please enter from and end date");
    }
  }

 render() {
   let self = this;
 return(<div>
   {
     self.state.adid_arr.length > 0 ?
   <div  style = {styles.background}><Menu  inverted style = {styles.appbar}>
          <Menu.Item header>Sentimental Analysis</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout'  onClick={this.handleLogout} />
          </Menu.Menu>
        </Menu>
        <div className="form">
          <Form onSubmit = {this.handleAnalysis}>
        <Row center = "xs">
        <Col xs = {3}>
        <Dropdown onChange={this.handleDropDownGroup} style = {styles.dropdown} placeholder='Select the Group' fluid search selection  required/>
        </Col>
        <Col xs = {3}>
        <Dropdown  onChange={this.handleDropDownAdId} style = {styles.dropdown} placeholder='Select the AdId' fluid search selection options={self.state.adid_arr} required/>
          </Col>
        <Col xs = {3}>
        <DatePicker style = {styles.fromcalendar} hintText="From date" maxDate={new Date()} textFieldStyle={{width: '50%'}}  onChange = {this.handleFromDate}/>
        </Col>
        <Col xs = {3} className = "enddate">
        <DatePicker style = {styles.endcalendar} hintText="End date" maxDate={new Date()} textFieldStyle={{width: '50%'}} onChange = {this.handleEndDate} />
        </Col>
        <Row center = "xs">
        <Button type='submit' style = {styles.button}>Get Analysis</Button>
        </Row>
        </Row>
        </Form>
        <Row center = "xs">

          {self.state.line_data.length >0 ?<div><Header as='h2' textAlign='center'>Weekly Report from {this.state.from} to {this.state.end}</Header>
           <Line  lineData = {self.state.line_data}/></div> :<div> <Header as='h2' textAlign='center'>Report on {this.state.fromDate} </Header><Table celled padded>
           <Table.Header>
             <Table.Row>
               <Table.HeaderCell singleLine>Intensity of Feelings</Table.HeaderCell>
               <Table.HeaderCell>Happy</Table.HeaderCell>
               <Table.HeaderCell>Sad</Table.HeaderCell>
               <Table.HeaderCell>Angry</Table.HeaderCell>
               <Table.HeaderCell>Afraid</Table.HeaderCell>
               <Table.HeaderCell>Ashamed</Table.HeaderCell>
             </Table.Row>
             </Table.Header>
             <Table.Body>
              <Table.Row>

                <Table.Cell>High</Table.Cell>
                <Table.Cell>{self.state.H_H}</Table.Cell>
                <Table.Cell>{self.state.H_S}</Table.Cell>
                <Table.Cell>{self.state.H_AN}</Table.Cell>
                <Table.Cell>{self.state.H_AF}</Table.Cell>
                <Table.Cell>{self.state.H_AS}</Table.Cell>
             </Table.Row>
             <Table.Row>
               <Table.Cell>Medium</Table.Cell>
               <Table.Cell>{self.state.M_H}</Table.Cell>
               <Table.Cell>{self.state.M_S}</Table.Cell>
               <Table.Cell>{self.state.M_AN}</Table.Cell>
               <Table.Cell>{self.state.M_AF}</Table.Cell>
               <Table.Cell>{self.state.M_AS}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Low</Table.Cell>
              <Table.Cell>{self.state.L_H}</Table.Cell>
              <Table.Cell>{self.state.L_S}</Table.Cell>
              <Table.Cell>{self.state.L_AN}</Table.Cell>
              <Table.Cell>{self.state.L_AF}</Table.Cell>
              <Table.Cell>{self.state.L_AS}</Table.Cell>
           </Table.Row>
         </Table.Body>
         </Table>
         </div>
}


        </Row>
</div>
        {/*}<Tabs >
      <Tab label="For a Group" style = {styles.tabs}>
        <div className = "linechart">

        <Form onSubmit = {this.handleAnalysis}>
        <DatePicker style = {styles.calendar} hintText="From date" maxDate={new Date()}  onChange = {this.handleFromDate}/>
        <DatePicker style = {styles.calendar} hintText="End da te" maxDate={new Date()} onChange = {this.handleEndDate} />
          <Button type='submit'>Get Analysis</Button>
        </Form>
        <Header as='h2' textAlign='center'>Weekly Report from {this.state.from} to {this.state.end}</Header>
          <Line  lineData = {this.state.line_data}/>
        </div>
      </Tab>
      <Tab label="For an Employee" >
        <div>
          <Header as='h2' textAlign='center'>Consolidated Weekly Report from {this.state.from} to {this.state.end}</Header>
        {/*}<Chart gdata={this.state.chart_data}/>
        </div>
      </Tab>
    </Tabs>*/}

        {/*}<Grid columns = {3} relaxed>
          <Grid.Column>
          <Grid columns = {2}>
          <Grid.Column></Grid.Column>
          <Grid.Column>

          </Grid.Column>
          </Grid>
          </Grid.Column>
          <Grid.Column>
          <Segment basic>

          </Segment>
          </Grid.Column>
          <Grid.Column>
            <Grid columns = {2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>*/}

        </div>: " "}</div>);
 }
 }

 module.exports = Home;
