import React, { Component } from 'react';


export default class Default extends Component{
    render(){
        console.log(this.props);
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1 className="display=3">404</h1>
                    <h2> page not found</h2>
                    <h3> the requested Url<span className="text-danger">
                        {this.props.location.pathname}</span>{" "} was not found</h3>
                </div>                
            </div>            
        </div>
        );
    }
}
