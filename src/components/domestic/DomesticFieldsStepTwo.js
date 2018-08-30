import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  Picker
} from 'react-native';

import { TextField } from 'react-native-material-textfield';

import FooterNavigation from './NavBottom';

import { colors } from '../../styles/Colors';

export default class DomesticFieldsStepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      irradation: 4,
      power: null,
      capacity: null,
    }
  }

  saveDomesticElement = () => {
    this.props.saveAndContinue(this.state);
  } 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pickerContainer}> 
          <Picker
            style={styles.listRegion}
            itemStyle={styles.ResgionItem}
            mode='dropdown'
            selectedValue={this.state.irradation}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({
                irradation: itemValue
              }, function() {
                this.saveDomesticElement();
              });
              
            }}
          >
            <Picker.Item label="Région côtière" value="4" />
            <Picker.Item label="Hauts plateaux" value="5" /> 
            <Picker.Item label="Sahara" value="6" /> 
          </Picker>
        </View>
        <View style={styles.textInputContainer}>
          <TextField
            label='Puissance crête du panneau (Wc)'
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
            keyboardType='numeric'
            onChangeText={(text) => {
              this.setState({
                power: text
              }, function() {
                this.saveDomesticElement();
              })
            }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextField
            label='Capacité de la batterie choisi (Ah)'
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
            keyboardType='numeric'
            onChangeText={(text) => {
              this.setState({
                capacity: text
              }, function() {
                this.saveDomesticElement();
              })
            }}
          />
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  textInputTitle: {
    fontSize: 12,
    color: colors.secondaryColor,
  },
  textInput: {
    marginTop: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    color: colors.secondaryColor,
  },
  listRegion: {
    height: 64,
    backgroundColor: '#f9f9f9'
  },
  regionItem: {
    fontSize: 12,
  },
  pickerContainer: {
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
    
  }
})