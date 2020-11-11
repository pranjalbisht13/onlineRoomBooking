import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Title from './Title';
import { Button,FormGroup, Label, Input, Form, FormText} from 'reactstrap';
import axios from "axios";
//import Timepicker from "react-time-picker";

export default class ViewBooking extends Component {
  
  constructor(props) {
    super(props);
   // this.state = {users: ""};
    this.state = {users: '', roomid: '',sdate:'',time:'',etime:''};

 }

  handleChange = event => {
          
    this.setState({
      [event.target.id]: event.target.value
  });
}
  
        viewBooking(et) {
          //alert('A username and password  was submitted: ' + this.state.userName + this.state.password);
          et.preventDefault();
          alert('Booking Detail of Room No.: ' + this.state.roomid);
          var users = this.state.users;
          var roomid = this.state.roomid; 
          var sdate = this.state.sdate;
          var time = this.state.time;   
          var etime = this.state.etime;  
       
         // axios.get(`https://jsonplaceholder.typicode.com/users/` + roomid, {roomid,users})
         axios.get("http://localhost:8080/rooms/" + roomid, {roomid,users,sdate,time,etime})
       //alert("Booking Details" + axios.get("http://localhost:8080/rooms/" + roomid, {roomid}))
       .then(res => {
              console.log(res);
     // console.log(res.data);
     this.setState({users:res.data})
     this.setState({sdate:res.data})
     this.setState({etime:res.data})
     this.setState({time:res.data})

    })

    .catch(error => {
    // console.log(error)
             console.log("User detail Mismatch")
             alert("Bad Credentials");
          })
        }
 render() {

  const{users}= this.state
  const{sdate}= this.state
  const{etime}= this.state
  const{time}= this.state
 
          return ( 
          
        <div style={{
          backgroundImage: `url("https://cdn.hipwallpaper.com/i/13/6/WX1HVj.jpg")`,
           backgroundsize:'cover',height:'800px'}}>
            <div className ="container my-5" >
                <Title title="Your Boking Details !!"/> 
      
        <br/>
            <Form>
            {/* <FormGroup>
              <Label for="users"><h5>User Name</h5></Label>
              <p id = "abc"> </p>
              <Input type="text" name="userName" id="users" placeholder="User Name" onChange={this.handleChange}/> 
            </FormGroup> */}
            
              <Label for="roomid"><h5>Room No. </h5></Label>
              <select style={{width:'100%'}}   className="Select-control Select-option.is-selected" value={this.state.roomid} id="roomid" placeholder="Room No." onChange={this.handleChange}>
                <option>101</option>
                <option>102</option>
                <option>103</option>
                <option>104</option>
                <option>105</option>
                <option>106</option>
                <option>107</option>
                <option>108</option>
                <option>109</option>
                <option>110</option>
              </select>                             
                            
                <Button  className="my-4" color="success"  onClick={et=> this.viewBooking(et)}><h5>View Booking</h5></Button>
          </Form>
          <div id ="users">
              <h4>Booked By : {users.users}</h4>
              <h4>Booking date : { sdate.sdate}</h4>
              <h4>Booking time : { time.time}</h4>
              <h4>Booking upto : { etime.etime}</h4>
        </div>
          </div>
          </div>
        );
      }  
    }
  
  