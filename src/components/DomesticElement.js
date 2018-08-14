import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export default class DomesticElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: { title: 'Nombre', value: 0 },
      power: { title: 'Puissance', value: 0 },
      duration: { title: 'Durée', value: 0 },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.listContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{this.state.number.title}</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.textInput}
              underlineColorAndroid='transparent'
              value={this.state.number.value.toString()}
              onChangeText={(text) => {
                const newNumber = Object.assign({}, this.state.number, { value: text });
                this.setState({ number: newNumber });
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{this.state.power.title}</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.textInput}
              underlineColorAndroid='transparent'
              value={this.state.power.value.toString()}
              onChangeText={(text) => {
                const newPower = Object.assign({}, this.state.power, { value: text });
                this.setState({ power: newPower });
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{this.state.duration.title}</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.textInput}
              underlineColorAndroid='transparent'
              value={this.state.duration.value.toString()}
              onChangeText={(text) => {
                const newDuration = Object.assign({}, this.state.duration, { value: text });
                this.setState({ duration: newDuration });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fefefe',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  listContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  textInputTitle: {
    fontSize: 11,
    color: 'grey'
  },
  textInput: {
    marginTop: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    color: 'grey'
  }
})
