import React, { Component } from "react";
import Title from './Title';
import { Button,FormGroup, Label, Input, Form, FormText} from 'reactstrap';
import axios from "axios";
import base_url from "../Api/BootApi";
import history from './history';
import { Link, Redirect } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: ''};

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
    
    var userName = this.state.userName;
     var password = this.state.password;    
  
    axios.post("http://localhost:8080/login", { userName ,password })
    //axios.post(`https://jsonplaceholder.typicode.com/users`, { userName ,password })
    
      .then(res => {
        
        console.log(res);
        console.log(res.data);
        alert("Login Succesfull");
      })

      .catch(error => {
       // console.log(error)
                console.log("User detail Mismatch")
                alert("Bad Credentials");
            })
        }

        
        // this.setState({ details: res.data }, () => {
        //   if (userName === this.state.details.userName) {
        //    console.log("login");
        
          // }
          // else {
          //   console.log("not login");
          //   }})
        // console.log(res);
        // console.log(res.data);
        
      //  alert("Login Succesfull") 


  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     userName: '',
  //     password: ''
  //   } 
  // }
  // handleClick(e) {
    
  //   e.preventDefault();
   
  //   axios.post(
  //     // method: 'post',
  //     // url: "http://localhost:8080/login",
  //     // config: {
  //      // headers: {
  //     //     'Access-Control-Allow-Origin' : '*',
  //     //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     //     'Access-Control-Allow-Origin':'*',
  //     //     "Access-Control-Allow-Origin": "*",           
  //     //       'Access-Control-Allow-Origin':" *",
  //     //       'Access-Control-Allow-Headers': "*",
  //       //    'Content-Type': 'application/json',
  //     // }
      
  //     // }
  //     "http://localhost:8080/login"
  //      // }
  //     //}
  //  )
  //    .then(response => {    
  //       console.log(response);
        
  //          })
  //   .catch(error => {
  //              console.log("CONSOLE ERROR: " + error)
  //         })
  //     }onChange={e => this.setState({ name: e.target.value })}  value={this.props.password}
                       // onChange={e => this.setState({ password: e.target.value })} />

    render() {
        return ( 
            <div className ="container my-5"  style={{
                backgroundImage: `url("https://images.hdqwalls.com/download/slowly-studying-but-still-trying-qhd-1440x900.jpg")`,
                 backgroundsize:'cover',height:'650px' }}>
                <Title title="Login Here !!"/> 
            <Form  style={{color:"white"}}>

            <FormGroup>
              <Label for="User"><h5>User Name</h5></Label>
              <Input type="text" name="userName" id="userName" placeholder="username" onChange={this.handleChange} />
                       
                       
            </FormGroup>
            <FormGroup>
              <Label for="password"><h5>Password</h5></Label>
              <Input type="password" name="Password" id="password" placeholder="password" onChange={this.handleChange}/>
               
            </FormGroup>           
            <Button  className="my-3" color="success" onClick={e=> this.handleClick(e)} ><h5>Login</h5></Button>
            <text><Link to="/register"><h4>New User ??? Register Here</h4></Link></text>
          </Form>
          </div>
        );
      }  
    }

