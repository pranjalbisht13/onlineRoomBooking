import React,{Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ViewBooking from '../component/ViewBooking';
import {FormControl, Form, Button} from "react-bootstrap";

export default class Navbar extends Component{

    
render(){    
  
    return(
        <NavWrapper className="navbar navbar-expand-lg navbar-light bg-warning ">           
          <ul className="navbar-nav align-items-right">
              <li className="nav-right ml-5">
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
              </li>
          </ul> 
          <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5">
                        <Link to="/about" className="nav-link">
                           About Us
                        </Link>
                    </li>
            </ul>
            <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5">
                        <Link to="/book" className="nav-link">
                           Book-Room
                        </Link>
                    </li>
            </ul>
            <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5">
                        <Link to="/cancel" className="nav-link">
                           Update-Room
                        </Link>
                    </li>
            </ul>
            <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5">
                        <Link to="/view" className="nav-link">
                           View-Booking
                        </Link>
                    </li>
            </ul>
           
           
                <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5 mr-0">
                        <Link to="/login" className="nav-link">
                           Login
                        </Link>
                    </li>
            </ul>
            <ul className="navbar-nav align-items-right">
                    <li className="nav-item mr-0">
                        <Link to="/register" className="nav-link">
                           Register
                        </Link>
                    </li>
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
      <input class="form-control align-content-end ml-5 mr-sm-3" type="search" 
                                    placeholder="Search" aria-label="Search"/>
       
      <button class="btn btn-danger my-2 my-sm-0"type="submit" onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='http://google.com';
                                            }}>Search</button>
     </form>          
                                  
      </NavWrapper> 
        );       
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: captalize;
}
`;