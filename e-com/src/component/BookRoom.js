import React, { Component } from "react";
import Title from './Title';
import { Button,FormGroup, Label, Input, Form, FormText} from 'reactstrap';
import axios from "axios";
//import Timepicker from "react-time-picker";



export default class BookRoom extends Component {
  
  constructor(props) {
    super(props);
    this.state = {users: '', roomid: '',sdate:'',time:'',etime:''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleClick.bind(this);

  }

  handleChange = event => {
          
    this.setState({
      [event.target.id]: event.target.value
  });
}
  handleClick(e) {
   //alert('A username and password  was submitted: ' + this.state.userName + this.state.password);
   e.preventDefault();
    
    var users = this.state.users;
     var roomid = this.state.roomid; 
     var sdate = this.state.sdate;
     var time = this.state.time;   
     var etime = this.state.etime;  
  
    axios.post("http://localhost:8080/room", { users ,roomid,sdate,time,etime})
   //axios.post(`https://jsonplaceholder.typicode.com/users`, { users ,roomid,sdate,time,etime})
    
      .then(res => {
          console.log(res);
        console.log(res.data);
        alert("Booking Succesfull");
      })

      .catch(error => {
       // console.log(error)
                console.log("User detail Mismatch")
                alert("Room Number already exist");
            })
        }

      
        
 render() {
  const customStyles = (width = 100, height = 40) => {
    return {
        container: (base) => ({
            ...base,
            display:'inline-block',
            width: width,
        }),
        valueContainer: (base) => ({
            ...base,
            minHeight: height,
        })
    }
}
          return ( 
            
        <div style={{
          backgroundImage: `url("https://cdn.hipwallpaper.com/i/13/6/WX1HVj.jpg")`,
           backgroundsize:'cover',height:'800px'}}>
            <div className ="container my-5" >
                <Title title="Book your Room here !!"/> 
            <Form>
            <FormGroup>
              <Label for="users"><h5>User Name</h5></Label>
              <Input type="text" name="userName" id="users" placeholder="User Name" onChange={this.handleChange}/>
            </FormGroup>
           
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
                             
              <FormGroup>
                <label className="my-4 mr-2"> <h5>Booking Date</h5></label>
                <input type="date" name="Booking date" id="sdate" placeholder="Booking Date" onChange={this.handleChange}>                 
                </input>
                </FormGroup>
                <FormGroup>
                <label className=" smy-3 mr-2"> <h5>Booking Time</h5></label>
                <input type="time" name="Booking date" id="time" placeholder="Booking Time" onChange={this.handleChange}>                 
                </input>
                <label className=" ml-4 smy-3 mr-2"> <h5>Booking Ending Time</h5></label>
                <input type="time" name="Booking date" id="etime" placeholder="Booking Time" onChange={this.handleChange}>                 
                </input>
                </FormGroup>                  
               
            <Button  className="my-4" color="success"  onClick={e=> this.handleClick(e)}><h5>Submit</h5></Button>
             
          </Form>
          </div>
          </div>
        );
      }  
    }

  