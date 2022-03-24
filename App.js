
import React , {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Dimensions,ImageBackground,Image,InputButton} from 'react-native';

export default class App extends Component{

  constructor(){
    super()
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    }
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
      calcText: "",
      readyap: false,
    }
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      })
    })
    this.operations = ['/','*','-','+','=']
    this.nums1 = []
    
    
    
  }

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
  

  buttonPressed(text){
    if (text == 'AC'){
      return this.resetResult(this.state.calcText)
 
    }
    this.setState({
      calcText: this.state.calcText+text
    })
    switch(text){
    case 'log':
      return this.log10(this.state.calcText)
    case 'ln':
      return this.logln(this.state.calcText)
    case '√':
      return this.sqrt(this.state.calcText)
    case 'x^3':
      return this.x3(this.state.calcText)
    case 'x^2':
      return this.x2(this.state.calcText)
    case '10^x':
      return this.tenx(this.state.calcText)
    case 'x!':
      return this.sil(this.state.calcText)
    case '+/-':
      return this.sign(this.state.calcText)
    case '%':
      return this.perc(this.state.calcText)
    case 'π':
      return this.setState({calcText: 3.14})
    case 'e':
      return this.setState({calcText: 2.718281828459})
    case 'e^x':
      return this.exp(this.state.calcText)
    case '.':
      this.setState({calcText: 0 + '.'})
      break
    }
    
    
  }

  operate(operation){
    const text = this.state.calcText
    
    switch(operation){
      case '=':
        if(this.state.text == "") return
        let calc = eval(this.state.calcText)
        this.setState({
          calcText: calc
        })
      break
      

      case '*':
      case '-':
      case '+':
      case '/':
        let dop = this.state.calcText.split('').pop()
        if(this.operations.indexOf(dop) >= 0 ) return
        if(this.state.calcText == "") return
        this.setState({
          calcText: this.state.calcText + operation
        })
        break
    }
  }

  render(){

    let pot =[[7,8,9],[4,5,6],[1,2,3],[0,',','AC']]
    let land = [['√','x!','AC','+/-','%'],['e^x','10^x',7,8,9],['ln','log',4,5,6],['e','x^2',1,2,3],['π','x^3',0,'.','']]
    if (this.state.orientation === 'portrait'){
      this.nums1 = pot
    }else{
      this.nums1 = land
    }

    setTimeout(() => {  this.setState({readyap: true})}, 5000); 
    if(this.state.readyap){
    return(
      <View style={styles.container}>
       <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.calcText}</Text>
       </View> 
       <View style={styles.buttons}>
        <View style={styles.numbers}>
          {
            this.nums1.map(row => (
              <View style={styles.buttons}>
              {
                row.map((item,index)=>(
                  <TouchableOpacity style={styles.btn} key={index} onPress={()=> this.buttonPressed(item)}>
                  <Text style={styles.btnText, styles.white}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
              </View>
            ))
          }
        </View>

        <View style={styles.operations}>
          {
            this.operations.map((item,index)=>(
              <TouchableOpacity style={styles.btn} onPress={()=> this.operate(item)}>
              <Text style={styles.btnText, styles.white}>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

       </View>
       
      </View>
    );
    }else{
      return(
        <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif',
        }}
        style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
    );
    }   
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  

   calculationText: {
    fontSize: 50,
    color: 'white'
  }, 

  calculation: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#77767C'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },

  numbers: {
    flex: 3,
    backgroundColor: '#918F97'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex',
    backgroundColor: '#E7822D'

  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'self',
    justifyContent: 'center'
  },
    white: {
    color: 'white',
    fontSize: 20
  },
  btnText: {
    fontSize: 25
  },


  
  

})