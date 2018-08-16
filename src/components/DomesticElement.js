import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { colors } from '../styles/Colors';

export default class DomesticElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      number: { title: 'Nombre', value: 0 },
      power: { title: 'Puissance', value: 0 },
      duration: { title: 'Durée', value: 0 },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.buttonContainer, {flex: 1}}>
            <TouchableOpacity style={styles.button}>
              <Icon
                name='x'
                type='feather'
                color={colors.primaryColor}
                size={16}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer, {flex: 9}}>
            <Picker
              style={styles.listCategory}
              itemStyle={styles.categoryItem}
              mode='dropdown'
              selectedValue={this.state.category}
              onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}
            >
              <Picker.Item label="Lampes à LED" value="item01" />
              <Picker.Item label="Réfrigirateur" value="item02" /> 
              <Picker.Item label="Télé + Démo" value="item03" /> 
              <Picker.Item label="Ordinateure" value="item04" /> 
              <Picker.Item label="Impriment" value="item05" /> 
              <Picker.Item label="Micro onde" value="item06" /> 
              <Picker.Item label="Radio-réveil" value="item07" /> 
              <Picker.Item label="Machine à laver" value="item08" /> 
              <Picker.Item label="Ventilateur" value="item09" />
              <Picker.Item label="Autre" value="item10" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          
          <View style={styles.textInputContainer, {flex: 2.5}}>
            <TextInput
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              value={this.state.number.value.toString()}
              style={styles.textInput}
              onChangeText={(text) => {
                const newNumber = Object.assign({}, this.state.number, { value: text });
                this.setState({ number: newNumber });
              }}
            />
          </View>
          <View style={styles.textInputContainer, {flex: 3}}>
            <TextInput
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              value={this.state.power.value.toString()}
              style={styles.textInput}
              onChangeText={(text) => {
                const newPower = Object.assign({}, this.state.power, { value: text });
                this.setState({ power: newPower });
              }}
            />
          </View>
          <View style={styles.textInputContainer, {flex: 2.5}}>
            <TextInput
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              value={this.state.duration.value.toString()}
              style={styles.textInput}
              onChangeText={(text) => {
                const newDuration = Object.assign({}, this.state.duration, { value: text });
                this.setState({ duration: newDuration });
              }}
            />
          </View> 
          <View style={styles.textContainer, {flex: 2}}>
              <Text>1958</Text>
          </View>
        </View>       
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  listCategory: {
    height: 30,
  },
  categoryItem: {
    fontSize: 12,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    paddingHorizontal: 5,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    color: 'grey'
  },
  textContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {

  },
  button: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff'
  }
  
})
