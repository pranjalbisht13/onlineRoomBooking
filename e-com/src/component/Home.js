import React , { Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'reactstrap';
import "../App.css";
import base_url from "./../Api/BootApi";
import axios from "axios";
//import ucm from './ucm.jpg';
//import { Card,CardImg, Button, CardTitle, CardText,Row,Col, Container } from 'reactstrap';

export default class Home extends Component {

  componentDidMount() {
    document.title = "Online Room Booking";
  }
  componentDidUpdate() {
    document.title = "Online Room booking";
  }

  render() {

     return(
 
      <div style={{
        backgroundImage: `url("https://s2.best-wallpaper.net/wallpaper/2880x1800/1907/Study-room-books_2880x1800.jpg")`,
         backgroundsize: 'cover', height:'700px' }}>

      <div  className="container-fluid text-center" style={{alignContent:"center"}}>
                  <div className ="ml-5">
                <h1 style={{ color: 'red' }}></h1>
            </div>
            
           
      <div  className= "container text-center">
      <Jumbotron  style={{backgroundColor:"bg-light"}}>
        <h1 className="display-3 ">Hello, Wanna Book Study Room !</h1>
        <p className="lead"> <h5>We added a new study room reservation system. This system will make it easier to get a room and prevent long lines of waiting students. 
        UCM no longer checks out keys or maintains a waiting list.</h5></p>
        <hr className="my-2" />        
        <p className="lead">         
        </p>
      </Jumbotron>
    </div>
    </div>
    </div>
  );
};
}