import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const stautsBarHeight = StatusBar.currentHeight;
const headerHeight = stautsBarHeight*1.618;
const navHeight = stautsBarHeight*1.618*1.618;

import DomesticElement from './DomesticElement';

import { Icon } from 'react-native-elements';
import { colors } from '../../styles/Colors';

let values = []

export default class DomesticFieldsStepOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.idAllocator = 0;
    this.state = {
      domesticArray: [],
    }

    this.addDomesticElement = this.addDomesticElement.bind(this);
    this.saveDomesticElement = this.saveDomesticElement.bind(this);
  }

  addDomesticElement() {
    const newItem = {
      id: ++this.idAllocator,
      quantity: 0,
      watt: 0,
      duration: 0,
      whDay: 0, 
    };
    this.setState(({domesticArray}) => {
      return {domesticArray: [...domesticArray, newItem]};
    });
  }

  saveDomesticElement (elem) {
    const index = this.state.domesticArray.findIndex((item) => item.id === elem.id);
    const saveItem = {
      id: elem.id,
      quantity: elem.quantity,
      watt: elem.watt,
      duration: elem.duration,
      whDay: elem.whDay
    };

    let newDomesticArray = this.state.domesticArray;

    newDomesticArray[index] = saveItem;

    this.setState({
      domesticArray: newDomesticArray
    });
  }

  saveAndContinue() {
    values = this.state.domesticArray;
  }

  render() {
    let listDomestic = this.state.domesticArray.map((item) => 
      <DomesticElement 
        key={item.id}
        id={item.id}
        saveDomesticElement={this.saveDomesticElement}
      />
    );

    return (
      <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
          <View style={{flex: 1}}></View>
          <View style={[styles.areaTextHeader, {flex: 3.5}]}>
            <Text style={styles.textHeader}>Catégorie</Text>
          </View>
          <View style={[styles.areaTextHeader, {flex: 1}]}>
            <Text style={styles.textHeader}>Qte</Text>
          </View>
          <View style={[styles.areaTextHeader, {flex: 1.5}]}>
            <Text style={styles.textHeader}>Watt</Text>
          </View>
          <View style={[styles.areaTextHeader, {flex: 1}]}>
            <Text style={styles.textHeader}>Hr/J</Text>
          </View>
          <View style={[styles.areaTextHeader, {flex: 2}]}>
            <Text style={styles.textHeader}>Wh/J</Text>
          </View>
        </View>

        <ScrollView style={{flex: 1, width: '100%'}}>
          {listDomestic}
        </ScrollView>

        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addDomesticElement}
        >
          <Icon
            name='plus'
            type='feather'
            color='white'
            size={26}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    width: '100%',
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
  },

  areaTextHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 12,
    color: '#fff',
  },

  flatList: {
    flex: 1,
    backgroundColor: '#eee'
  },

  containerFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },

  textFooter: {
    fontSize: 18,
    fontWeight: '500'
  },

  addButton: {
    position: 'absolute',
    zIndex: 300,
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 10,
    backgroundColor: colors.primaryColor,
  },
  
})
