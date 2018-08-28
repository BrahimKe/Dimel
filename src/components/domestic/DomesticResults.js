import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

export default class DomesticResults extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Puissance du champ photovoltaique</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>975</Text></View>
          </View>

          <View style={styles.section}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Nombre des batteries</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>975</Text></View>
          </View>

          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Capacité de batterie (Ah)</Text></View>
            <View style={styles.valueContainer}><Text style={styles.valueText}>426.523</Text></View>
          </View>

          <View style={styles.section}>
            <View style={styles.subSection}>
              <View><Text>Nombre des panneaux</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>Nombre de panneaux en parallèles </Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>2</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>Nombre de panneaux en séries </Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>2</Text></View>
              </View>
            </View>
          </View>

          <View style={[styles.section, {backgroundColor: '#efefef'}]}>
            <View style={styles.subSection}>
              <View><Text>Régulateur de charge</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>Le courant</Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>17.5</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>La tension</Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>73.2</Text></View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.subSection}>
              <View><Text>Convertisseur</Text></View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>La puissance</Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>2493.75</Text></View>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={styles.titleContainer}><Text style={styles.titleText}>La tension</Text></View>
                <View style={styles.valueContainer}><Text style={styles.valueText}>1000</Text></View>
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

  titleText: {
    fontSize: 14,
    lineHeight: 40,
    color: '#707070'
  }
})
