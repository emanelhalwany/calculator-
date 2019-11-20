import React , { Component } from "react";
import './Input.css';

class Input extends Component{

    state={
        

    };

    render() {
    
        return(
            <div className ="input">
                {this.props.children}
            </div>
        );
    }
}
    
export default Input;