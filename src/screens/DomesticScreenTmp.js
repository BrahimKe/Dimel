import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

const stautsBarHeight = StatusBar.currentHeight;
const headerHeight = stautsBarHeight*1.618;
const navHeight = stautsBarHeight*1.618*1.618;

import DomesticElement from '../components/DomesticElement';

import { colors } from '../styles/Colors';

export default class DomesticScreenTmp extends React.Component {
  static navigationOptions = {
    title: 'Domestic',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
          <View style={{flex: 0.3}}></View>
          <View style={styles.headerTextAream, {flex: 1.5}}>
            <Text style={styles.headerText}>Catégorie</Text>
          </View>
          <View style={styles.headerTextArea, {flex: 0.7}}>
            <Text style={styles.headerText}>Nombre</Text>
          </View>
          <View style={styles.headerTextArea, {flex: 1}}>
            <Text style={styles.headerText}>Puissance</Text>
          </View>
          <View style={styles.headerTextArea, {flex: 0.7}}>
            <Text style={styles.headerText}>Durée</Text>
          </View>
        </View>
        
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView>
            <DomesticElement title='Lampes à LED'/>
          </KeyboardAvoidingView>
        </ScrollView>
        
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.textAddButton}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: headerHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
  },
  headerTextArea: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  headerCategory: {
    flex: 1.2,
  },
  headerText: {
    fontSize: 12,
    color: '#fff',
  },
  footerNavigation: {
    flexDirection: 'row',
    height: navHeight,
    backgroundColor: '#cc3333',
    alignItems: 'center',
  },
  footerButton: {
    flex: 1,
    height: stautsBarHeight*1.618,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  textFooterButton: {
    color: '#cc3333',
    fontWeight: '600',
  },
  addButton: {
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
    height: stautsBarHeight*1.618,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#cc3333',
    borderWidth: 1,
    borderRadius: 4,
  },
  textAddButton: {
    color: '#fff',
    fontSize: 30,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
