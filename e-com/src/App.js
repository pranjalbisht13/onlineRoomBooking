import React, { Component } from 'react';
import {Switch,Route, Router} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './component/About';
import Navbar from './component/Navbar';
import Home from './component/Home';
import BookRoom from './component/BookRoom';
import ViewBooking from './component/ViewBooking';
import UpdateRoom from './component/UpdateRoom';
import Login from './component/Login';
import Register from './component/Register';
import Default from './component/Default';
import history from './component/history'; 

class App extends Component {
  
  render(){
    return (
      <Router history={history}>
   <React.Fragment>
     <Navbar/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/book" component={BookRoom}/>
      <Route path="/cancel" component={UpdateRoom}/>
      <Route path="/view" component={ViewBooking}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route component={Default}/>
     </Switch>
       </React.Fragment>
       </Router>
       );
    }
}
export default App;
