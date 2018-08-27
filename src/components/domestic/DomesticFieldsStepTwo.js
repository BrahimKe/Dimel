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

export default class DomesticNextScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: '',
      Irradiation: { title: 'Irradiation Ej (kWh/m²)', value: 0 },
      power: { title: 'Puissance crête du panneau (Wc)', value: 0 },
      capacity: { title: 'Capacité de la batterie choisi (Ah)', value: 0 },
    }
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextField
            label='Puissance crête du panneau (Wc)'
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextField
            label='Capacité de la batterie choisi (Ah)'
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
          />
        </View>
        <View style={styles.pickerContainer}> 
          <Picker
            style={styles.listRegion}
            itemStyle={styles.ResgionItem}
            mode='dialog'
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}
          >
            <Picker.Item label="Région côtière" value="region1" />
            <Picker.Item label="Hauts plateaux" value="region2" /> 
            <Picker.Item label="Sahara" value="region3" /> 
          </Picker>
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