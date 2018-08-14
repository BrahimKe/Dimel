import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';

const stautsBarHeight = StatusBar.currentHeight;
const navHeight = stautsBarHeight*1.618*1.618;

import DomesticElement from '../components/DomesticElement';

export default class DomesticScreen extends React.Component {
  static navigationOptions = {
      title: 'Domestic',
    };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar/>
        <ScrollView style={styles.scrollView}>
          <DomesticElement title='Lampes à LED'/>
          <DomesticElement title='Réfrigirateur'/>
          <DomesticElement title='Télé + Démo'/>
          <DomesticElement title='Ordinateur'/>
          <DomesticElement title='Impriment'/>
          <DomesticElement title='Micro onde'/>
          <DomesticElement title='Radio-réveil'/>
          <DomesticElement title='Machine à lavé'/>
          <DomesticElement title='Ventilateur'/>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.textAddButton}> + Ajouter un appareil</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footerNavigation}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.textFooterButton}>Retour</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.textFooterButton}>Suivant</Text>
          </TouchableOpacity>
        </View>
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
    color: '#cc3333',
    fontWeight: '600',
  }
})
