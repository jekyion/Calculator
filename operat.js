
import React , {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Dimensions,ImageBackground,Image,InputButton} from 'react-native';

export default class operat extends Component{



  resetResult(){
    let text = this.state.resultText
    text = ""
    this.setState({
      calcText: text
    })
  }

log10(y){

    let a = Math.log10(y)
        this.setState({
          calcText: a
    })
  }
  logln(y){

    let a = Math.log(y)
        this.setState({
          calcText: a
    })
  }
  sqrt(y){
    let a = Math.sqrt(y)
        this.setState({
          calcText: a
    })
  }
  x3(y){
    let a = Math.pow(y,3)
        this.setState({
          calcText: a
    })
  }
  x2(y){
    let a = Math.pow(y,2)
        this.setState({
          calcText: a
    })
  }
  tenx(y){
    let a = Math.pow(10,y)
        this.setState({
          calcText: a
    })
  }
  perc(y){
        this.setState({
          calcText: y/100
    })
  }
  exp(y){
        this.setState({
          calcText: Math.pow(2.718281828459,y)
    })
  }
  sil(y){
    var i = 1;
    var s = 1;
    while (i <= y) s *= i++;
        this.setState({
          calcText: s
    })
  }
  sign(y){
    if (y != 0 ){
    y = y * (-1) 
    }
        this.setState({
          calcText: y
    })
  }
  handleInput(x){}
}
