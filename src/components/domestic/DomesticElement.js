import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { TextField } from 'react-native-material-textfield';

import { Icon } from 'react-native-elements';
import { colors } from '../../styles/Colors';

export default class DomesticElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      quantity: 0,
      watt: 0,
      duration: 0,
      whDay: 0,
      pt: 0,
    }

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {

    let state = {
      id,
      quantity,
      watt,
      duration,
      whDay,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.buttonContainer, {flex: 1}]}>
          <TouchableOpacity 
            onPress={() => {}}
            style={styles.button}
          >
            <Icon
              name='x'
              type='feather'
              color={colors.primaryColor}
              size={16}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.titleContainer, {flex: 3.5}]}>
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
        <View style={[styles.textInputContainer, {flex: 1}]}>
          <TextField
            label=''
            maxLength={2}
            labelHeight={0}
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
            keyboardType='numeric'
            onChangeText={(text) => {
              quantity = text;
              whDay = quantity*watt*duration;
              pt = quantity*watt;
              this.setState({
                quantity: quantity,
                whDay: whDay,
                pt: pt,
              })
            }}
            ref={input => {
              this.inputs['quantity'] = input;
            }}
            onSubmitEditing={() => {
              this.focusNextField('watt');
              this.props.saveDomesticElement(state);
            }}
            returnKeyType={ "next" }
          />
        </View>
        <View style={[styles.textInputContainer, {flex: 1.5}]}>
          <TextField
            label=''
            maxLength={4}
            labelHeight={0}
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
            keyboardType='numeric'
            onChangeText={(text) => {
              watt = text;
              whDay = quantity*watt*duration;
              pt = quantity*watt;
              this.setState({
                watt: watt,
                whDay: whDay,
                pt: pt,
              },)
            }}
            ref={input => {
              this.inputs['watt'] = input;
            }}
            onSubmitEditing={() => {
              this.focusNextField('duration');
              this.props.saveDomesticElement(state);
            }}
            returnKeyType={ "next" }
          />
        </View>
        <View style={[styles.textInputContainer, {flex: 1}]}>
          <TextField
            label=''
            maxLength={2}
            labelHeight={0}
            inputContainerStyle={{backgroundColor: '#f6f6f6', paddingHorizontal: 3}}
            tintColor={colors.primaryColor}
            keyboardType='numeric'
            onChangeText={(text) => {
              duration = text;
              whDay = quantity*watt*duration;
              pt = quantity*watt;
              this.setState({
                duration: duration,
                whDay: whDay,
                pt: pt,
              })
            }}
            ref={input => {
              this.inputs['duration'] = input;
            }}
            returnKeyType={ "done" }
            onSubmitEditing={() => {
              this.props.saveDomesticElement(state);
            }}
          />
        </View> 
        <View style={[styles.textContainer, {flex: 2}]}>
            <Text>{whDay}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  buttonContainer: {

  },

  button: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listCategory: {
    height: 30,
  },

  categoryItem: {
    fontSize: 12,
  },

  textInputContainer: {
    paddingHorizontal: 3,
  },

  textInput: {
    paddingHorizontal: 3,
    marginRight: 5,
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
})
