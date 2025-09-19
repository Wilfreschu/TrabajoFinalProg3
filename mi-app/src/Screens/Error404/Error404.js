import React, { Component } from "react";

class Error extends Component{
    constructor(props){
        super(props);
        this.state={
            info:[]
        }
    }
    render(){
        return(
            <h1>Error 404</h1>
        )
    }
}
export default Error