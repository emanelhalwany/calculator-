import React , { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';


class App extends Component{

  state={
    input:"",
    prevousNumber:"",
    currentNumber :"",
    operator:""
  };

  addToInput = val =>{
    this.setState({input:this.state.input +val});
  }


  addZeroToInput = val =>{
    if(this.state.input !== "" ){
      this.setState({input:this.state.input +val});
    }
  }

  addDecimal = val =>{
    if(this.state.input.indexOf(".") === -1 ){
      this.setState({input:this.state.input +val});
    }
  }

  clearInput = ()=>{
    this.setState({input:""});
  }

  add =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="pluse";
  }

  subtract =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="subtract";
  }

  multiply =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="multiply";
  }

  divide =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="divide";
  }

  evaluate =()=> {
    this.state.currentNumber=this.state.input;
    if(this.state.operator=="pluse"){
      this.setState({
        input: parseInt(this.state.prevousNumber) +
               parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator=="subtract"){
      this.setState({
        input: parseInt(this.state.prevousNumber) -
               parseInt(this.state.currentNumber)
      
      });
    }
    else if(this.state.operator=="multiply"){
      this.setState({
        input: parseInt(this.state.prevousNumber) *
               parseInt(this.state.currentNumber)
      
      });
    }else if(this.state.operator=="divide"){
      this.setState({
        input: parseInt(this.state.prevousNumber) /
               parseInt(this.state.currentNumber)
      
      });
    }
 }

  render() {
  
      return(
      <div className="app">
        <div className = "calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>7</Button>
            <Button handelClick={this.addToInput}>8</Button>
            <Button handelClick={this.addToInput}>9</Button>
            <Button handelClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>4</Button>
            <Button handelClick={this.addToInput}>5</Button>
            <Button handelClick={this.addToInput}>6</Button>
            <Button handelClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>1</Button>
            <Button handelClick={this.addToInput}>2</Button>
            <Button handelClick={this.addToInput}>3</Button>
            <Button handelClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addDecimal}>.</Button>
            <Button  handelClick={this.addZeroToInput}>0</Button>
            <Button handelClick={this.evaluate}>=</Button>
            <Button handelClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handelClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
    </div>
          
      );
  }
}
  
export default App;

