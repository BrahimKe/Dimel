import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import HomeCard from '../components/HomeCard';

const DATA = {
  domestique: { id:1, title: 'Domestique', src: require('../assets/img/domestic.jpg') },
  pompe: { id:2, title: 'Pompe', src: require('../assets/img/pump.jpg')  },
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
component 
  

  render() {
    
    return(
      <View style={styles.container}>
        <StatusBar
          hidden={false}
        />
        <Text style={styles.title}>Choisir la catégorie</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DomesticScreen')}
        >
          <HomeCard
            title={DATA.domestique.title}
            source={DATA.domestique.src}
            style={styles.homeCard}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HomeCard
            title={DATA.pompe.title}
            source={DATA.pompe.src}
            style={{marginBottom: 50}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  homeCard: {
    marginBottom: 50,
  }
});
