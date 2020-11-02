import React, { Component } from "react";
import Title from './Title';


export default class About extends Component {
    render() {
        return ( 
        
            <div  style={{
                backgroundImage: `url("https://cdn.hipwallpaper.com/i/56/98/en5XIQ.jpg")`,
                 backgroundsize:'cover',width:"1400px", height:'700px'}}>
          
                <div className="container">
                <Title name="About" title="Us"/> 
                 <div  className="col-10 mx-auto">   
                 <p className="text-center my-5">
                 <h3 style={{color:"black"}}>Smart does not imply complex, quite the opposite. We're easy-going people.
                  Our solution is simple to use and easy to understand. It is,
                  however, really hard to be simple. We've come a long way, don't you agree?
                  </h3> </p>  
                </div>
                </div>
            </div> 
                );
    }
}
