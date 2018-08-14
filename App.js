import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DomesticScreen from './src/screens/DomesticScreen';
import SplashScreen from './src/screens/SplashScreen';
import { colors } from './src/styles/Colors';

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    DomesticScreen: DomesticScreen,
    SplashScreen: SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
