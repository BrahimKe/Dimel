import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity 
} from 'react-native';

import { withNavigation } from 'react-navigation';

import { Icon } from 'react-native-elements';
import { colors } from '../styles/Colors';

class FooterNavigation extends React.Component {
  render() {
    const nav = this.props.navigation;
    return (
      <View style={styles.footer}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('DomesticNextScreen')}
          style={styles.footerButton}
        >
          <Text style={styles.textFooterButton}>{this.props.text}</Text>
          <Icon
            name='chevron-right'
            type='feather'
            color={colors.primaryColor}
            size={26}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#efefef',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
  footerButton: {
    height: 40,
    width: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textFooterButton: {
    color: colors.primaryColor,
    marginRight: 10,
    fontSize: 16,
    fontWeight: '600',
  }
})

export default withNavigation(FooterNavigation);