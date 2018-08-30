import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export var stepOneFieldValues = [];
export var stepTwoFieldValues = {};

import DomesticFieldsStepOne from '../components/domestic/DomesticFieldsStepOne';
import DomesticFieldsStepTwo from '../components/domestic/DomesticFieldsStepTwo';

import NavBottom from '../components/domestic/NavBottom';
import { colors } from '../styles/Colors';
import { Icon } from 'react-native-elements';

export default class DomesticScreen extends React.Component {
  constructor(props) {
    super(props);
    this.maxStep = 2;
    this.state = {
      step: 2,
    }
  }

  getCurrentStep = () => {
    return this.state.step;
  }

  nextStep = () => {
    this.getCurrentStep() == this.maxStep ? 
    null :
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep = () => {
    this.getCurrentStep() == 1 ?
    null: 
    this.setState({
      step: this.state.step - 1,
    })
  }

  saveAndContinueStepOne = (fields) => {
    stepOneFieldValues = fields;
  }

  saveAndContinueStepTwo = (fields) => {
    stepTwoFieldValues = fields;
  }

  renderDomesticScreen() {
    switch (this.state.step) {
      case 1:
        return  <DomesticFieldsStepOne 
                  saveAndContinue={this.saveAndContinueStepOne}  
                />
      case 2:
        return  <DomesticFieldsStepTwo
                  saveAndContinue={this.saveAndContinueStepTwo}
                />
    }
  }

  render() {
    let {
      step
    } = this.state;

    let textLeft = step == 1 ? null : 'Retour'; 
    let textRight = step == 1 ? 'Suivant' : 'Valider';
    
    return (
      <View style={styles.container}>
        {this.renderDomesticScreen()}
        <NavBottom 
          textLeft={textLeft}
          textRight={textRight}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          getCurrentStep={this.getCurrentStep}
          
        />
      </View> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})