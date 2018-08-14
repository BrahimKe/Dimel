import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';

export default class HomeCard extends React.Component {
  render() {
    return (
        <Card
          image={this.props.source}
          imageStyle={styles.image}
        >
          <Text style={styles.text}>{this.props.title}</Text>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 123.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
});
