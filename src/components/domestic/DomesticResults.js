import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

const depthDischarge = 0.8;
const numAutonomy = 3;
const sysVoltage = 24;

import {stepOneFieldValues} from '../../screens/DomesticScreen';
import {stepTwoFieldValues} from '../../screens/DomesticScreen';

export default class DomesticResults extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getK() {
    k = 0.7;
    return k;
  }

  sumWhDay() {
    let length = stepOneFieldValues.length;
    let sum = 0;
    for (i=0; i<length; i++) {
      sum = sum + stepOneFieldValues[i].whDay;
    }
    return sum;
  }
  
  sumPt() {
    let length = stepOneFieldValues.length;
    let sum = 0;
    for (i=0; i<length; i++) {
      sum = sum + stepOneFieldValues[i].pt;
    }
    return sum;
  }

  calcPowerPhotovoltaic = () => {
    let sumWhDay = this.sumWhDay();
    let k = this.getK();
    let irradation = stepTwoFieldValues.irradation;
    let result = sumWhDay/(k*irradation);
    return Number(result).toFixed(2);
  }

  calcCapacityBattery = () => {
    let sumWhDay = this.sumWhDay();
    let result = sumWhDay*numAutonomy/(depthDischarge*sysVoltage);
    return Number(result).toFixed(2);
  }

  calcNumBatteries = () => {
    let capacityBattery = this.calcCapacityBattery();
    let capacityBatteryChosen = stepTwoFieldValues.capacity;
    let result = capacityBattery/capacityBatteryChosen;
    return Number(result).toFixed(2);
  }

  calcPowerConverter = () => {
    let result = this.sumPt()*1.25;
    return Number(result).toFixed(2);
  }
  

  render() {
    let powerPhotovoltaic = this.calcPowerPhotovoltaic().toString();
    let capacityBattery = this.calcCapacityBattery().toString();
    let numBatteries = this.calcNumBatteries().toString();

    let powerConverter = this.calcPowerConverter().toString();
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Puissance du champ photovoltaique</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>{powerPhotovoltaic}</Text></View>
          </View>

          <View style={styles.section}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Nombre des batteries</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>{numBatteries}</Text></View>
          </View>

          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Capacité de batterie (Ah)</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>{capacityBattery}</Text></View>
          </View>

          <View style={styles.section}>
            <View style={styles.subSection}>
              <View><Text style={styles.titleText}>Nombre des panneaux</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>Nombre de panneaux en parallèles </Text></View>
                <View style={styles.valueContainer}><Text style={styles.subValueText}>2</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>Nombre de panneaux en séries </Text></View>
                <View style={styles.valueContainer}><Text style={styles.subValueText}>2</Text></View>
              </View>
            </View>
          </View>

          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.subSection}>
              <View><Text style={styles.titleText}>Régulateur de charge</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>Le courant</Text></View>
                <View style={styles.valueContainer}><Text style={styles.subValueText}>17.5</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>La tension</Text></View>
                <View style={styles.valueContainer}><Text style={styles.subValueText}>73.2</Text></View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.subSection}>
              <View><Text style={styles.titleText}>Convertisseur</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>La puissance</Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>{powerConverter}</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.subTitleText}>La tension</Text></View>
                <View style={styles.valueContainer}><Text style={styles.subValueText}>1000</Text></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  section: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  subSection: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },

  titleContainer: {
    flex: 8,
    alignItems: 'flex-start'
  },

  valueContainer: {
    flex: 2,
    alignItems: 'center',
  },

  valueText: {
    fontSize: 16,
    lineHeight: 40,
    fontWeight: '500',
    color: '#707070'
  },

  subValueText: {
    fontSize: 14,
    lineHeight: 40,
    fontWeight: '500',
    color: '#707070'
  },

  titleText: {
    fontSize: 14,
    lineHeight: 40,
    fontWeight: '500',
    color: '#707070'
  },

  subTitleText: {
    fontSize: 12,
    lineHeight: 40,
    color: '#707070'
  } 
})
