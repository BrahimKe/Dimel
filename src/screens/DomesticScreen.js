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
  FlatList
} from 'react-native';

const stautsBarHeight = StatusBar.currentHeight;
const headerHeight = stautsBarHeight*1.618;
const navHeight = stautsBarHeight*1.618*1.618;

import FooterNavigation from '../components/FooterNavigation';
import DomesticElement from '../components/DomesticElement';


import { Icon } from 'react-native-elements';
import { colors } from '../styles/Colors';

export default class DomesticScreen extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = [
      {key: 'a'}, 
      {key: 'b'},
    ]
    this.state = {
      dataSource: dataSource,
    }
  }

  static navigationOptions = {
    title: 'Domestic',
  };

  addElem() {
    const newDataSource = this.state.dataSource;
    newDataSource.unshift({key: 'Reply Q'});
    //console.log(comments);
    this.setState({ dataSource: newDataSource.slice(0)});
  }

  renderItem = ({item}) => {
    return (
      <DomesticElement
        id = {item.id}
      />
    );
  }

  renderSeparator() {
    return (
      <View
        style={
          {height: 2,
          backgroundColor: '#eee'}
        }
      >
      </View>
    );
  }

  renderFooterList() {
    return (
      <View
        style={
          {height: 200,
          backgroundColor: '#fff'}
        }
      >
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
          <View style={styles.areaTextHeader, {flex: 2.5}}>
            <Text style={styles.textHeader}>Nombre</Text>
          </View>
          <View style={styles.areaTextHeader, {flex: 3}}>
            <Text style={styles.textHeader}>Puissance</Text>
          </View>
          <View style={styles.areaTextHeader, {flex: 2.5}}>
            <Text style={styles.textHeader}>Durée</Text>
          </View>
          <View style={{flex: 2}}></View>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          style={styles.flatList}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooterList}
        />
        <FooterNavigation text='Suivant' goTo='DomesticNextScreen'/>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addElem.bind(this)}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
  },
  areaTextHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textHeader: {
    fontSize: 12,
    color: '#fff',
  },
  flatList: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: colors.primaryColor,
  },
})
