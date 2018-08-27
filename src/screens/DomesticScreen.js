import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import DomesticFieldsStepOne from '../components/domestic/DomesticFieldsStepOne';
import DomesticFieldsStepTwo from '../components/domestic/DomesticFieldsStepTwo';

import NavBottom from '../components/domestic/NavBottom';
import { colors } from '../styles/Colors';
import { Icon } from 'react-native-elements';

export default class DomesticScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }

  renderDomesticScreen() {
    switch (this.state.step) {
      case 1:
        return <DomesticFieldsStepOne/>
      case 2:
        return <DomesticFieldsStepTwo/>
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