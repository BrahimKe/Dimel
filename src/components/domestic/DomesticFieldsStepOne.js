import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

const stautsBarHeight = StatusBar.currentHeight;
const headerHeight = stautsBarHeight*1.618;
const navHeight = stautsBarHeight*1.618*1.618;


import DomesticElement from './DomesticElement';


import { Icon } from 'react-native-elements';
import { colors } from '../../styles/Colors';

export default class DomesticScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    let dataSource = [];
    this.state = {
      dataSource: dataSource,
    }
  }
  
  addElem = () => {
    let dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: [...dataSource, DomesticElement]
    }); 
  }

  renderItem = ({item, index}) => {
    return (
      <DomesticElement
        item={item}
        index={index}
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
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            style={styles.flatList}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooterList}
          />
        
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addElem}
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
