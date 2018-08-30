import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';

import DomesticResults from '../components/domestic/DomesticResults';

export default class DomesticResultsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Résultats',
  };

  render() {
    return (
      <View style={styles.container}>
        <DomesticResults/>
      </View>
      
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  }
})
