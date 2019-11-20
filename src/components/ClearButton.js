import React , { Component } from "react";
import './ClearButton.css';

class ClearButton extends Component{

    state={
        

    };

    render() {
    
        return(
            <div className ="clear-btn"

            onClick ={()=> this.props.handelClear()}
            
            >
                {this.props.children}
            </div>
        );
    }
}
    
export default ClearButton;