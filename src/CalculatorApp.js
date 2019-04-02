import React, { Component } from 'react';
import { View , Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './Components/Common/Button';
import { connect } from 'react-redux';
import {
    firstNumber,
    secondNumber, 
    clear, 
    sum, 
    diff, 
    prod, 
    quo
} from './actions';

class CalculatorApp extends Component {
   
  onFirstInput (num){
    this.props.firstNumber(num)
  }

  onSecondInput (num){
    this.props.secondNumber(num)
  }

  delete =() => {this.props.clear(this.props.firstInput, this.props.secondInput)}
  
  adding = () => {this.props.sum(this.props.firstInput, this.props.secondInput)}
  
  subtract = () => {this.props.diff(this.props.firstInput, this.props.secondInput)}

  multiply = () => {this.props.prod(this.props.firstInput, this.props.secondInput)}

  divide = () => {this.props.quo(this.props.firstInput, this.props.secondInput)}
  
  render() {
    return(
      <View style={styles.cardContainer}>
        <View style={styles.resultHolderstyle}>
            <TouchableOpacity onPress={this.delete} style={styles.buttonRStyle}>
              <Text style={styles.numberStyle}>
                {this.props.result}
              </Text>
            </TouchableOpacity> 
        </View> 
        <View style ={styles.inputHolderStyle}>
            <TextInput 
            placeholder="Enter Value"
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.props.firstInput}
            onChangeText={this.onFirstInput.bind(this)}
            />
            <TextInput 
            placeholder="Enter Value"   
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.props.secondInput}
            onChangeText={this.onSecondInput.bind(this)} 
            />
        </View>      
        <View style = {styles.buttonContainerStyle}>
          <Button onPress={this.adding} > + </Button>
          <Button onPress={this.subtract}> - </Button>
          <Button onPress={this.multiply}> X </Button>
          <Button onPress={this.divide}> / </Button>
        </View>
      </View>
      
    );
  }
}

const styles ={
    cardContainer: {
      flex: 1,
    },

    resultHolderstyle:{
      flex: 2.5,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#EFD67F'
    },

    numberStyle:{
      flexDirection: 'row',
      color: 'white',
      fontWeight: '500',
      fontSize: 36,
      paddingTop: 45,
      paddingBottom: 50,
      textAlign:'center',
      justifyContent:'center',
      alignItems: 'center',
    },

    inputHolderStyle:{
      flex: 3,
      backgroundColor: '#5E7496',
      flexDirection: 'row'
    },
  
    inputStyle:{
      flex: 1,
      color: 'white',
      backgroundColor: '#6697A7',
      borderWidth: 0.5,
      borderColor: '#E4E2E9',
      fontWeight: '300',
      fontSize: 32,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },

    buttonContainerStyle:{
      flex: 3,
      flexDirection: 'row'
    },

    buttonRStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#515689',
      borderWidth: 0.5,
      borderHeight: 0.5,
      borderRadius: 3,
      borderColor: '#555555'
  }
};

mapStateToProps = ({ operation }) => {
    const { firstInput, secondInput, result } = operation
    return { firstInput, secondInput, result }
}

export default connect(mapStateToProps, { firstNumber, secondNumber, sum, diff, prod, quo, clear })(CalculatorApp);
