import React, { Component } from "react";
import Title from './Title';
import { Button,FormGroup, Label, Input, Form, FormText} from 'reactstrap';
import axios from "axios";
import base_url from "../Api/BootApi";
import { Link, Redirect } from "react-router-dom";
import history from './history'; 


export default class Register extends Component {

   
  constructor(props) {
    super(props);
  this.state = {
    userName:'',
    email:'',
    password:''
  }
}

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  
  };

  handleClick(e) {
   e.preventDefault();

    
    var userName = this.state.userName;
    var email = this.state.email;
     var password = this.state.password;
    // var userName = this.state.userName;
    
  
    axios.post(`http://localhost:8080/registeruser`, { userName ,email, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
               alert("Registeration Succesfull");
         
      })

          .catch(error => {
                     console.log("User detail Mismatch")
                     alert("Bad Credentials");
                })
            }
  

  // handleClick() {

  //   axios({
  //     method: 'post',
  //     //proxy : "http://localhost:8080/registeruser",
  //     url:"http://localhost:8080/registeruser",
           
  //     config: {
  //       headers: {
  //         'Access-Control-Allow-Origin' : '*',
  //         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //         'Access-Control-Allow-Origin':'*',
  //         "Access-Control-Allow-Origin": "*",           
  //           'Access-Control-Allow-Origin':" *",
  //           'Access-Control-Allow-Headers': "*",
  //           "Content-Length": "0",
  //           'Content-Type': 'application/json'
  //     }
  



  render() {
        return ( 
            <div className ="container my-5 " style={{
              backgroundImage: `url("https://cdn.hipwallpaper.com/i/82/0/eAiPOp.jpg")`,
               backgroundsize:'cover',height:'700px' }}>
                <Title title="New User Register Here!!"/> 
            <Form style={{color:"black"}}>
            <FormGroup>
              <Label for="User"><h5>User Name</h5></Label>
              <Input type="text" name="userName" id="userName" placeholder="User Name"onChange={this.handleChange} />
            </FormGroup> 
            <FormGroup>
              <Label for="User"><h5>Email Id</h5></Label>
              <Input type="email" name="Email" id="email" placeholder="Email ID" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup>
              <Label for="User"><h5>Password</h5></Label>
              <Input type="password" name="Password" id="password" placeholder="Password" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="User"><h5>Confirm Password</h5></Label>
              <Input type="confirm password" name="confirm Password" id="Confirmpassword" placeholder="Confirm password" />
            </FormGroup>
           
            <Button  className="my-3 mr-3" color="success" onClick={e=> this.handleClick(e)} ><h5>Click to Register</h5></Button>
            <Button  className="mr-2 my-3" color="warning" onClick={() => history.push('/login')}> <h5>Already a User? Login here</h5></Button>
          </Form>
          </div>
        );
      }  
    }

