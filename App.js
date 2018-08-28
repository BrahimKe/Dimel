import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import DomesticScreen from './src/screens/DomesticScreen';
import DomesticResultsScreen from './src/screens/DomesticResultsScreen';
import DomesticFieldsStepOne from './src/components/domestic/DomesticFieldsStepOne';
import DomesticFieldsStepTwo from './src/components/domestic/DomesticFieldsStepTwo';

import { colors } from './src/styles/Colors';

const RootStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    HomeScreen: HomeScreen,
    DomesticScreen: DomesticScreen,
    DomesticResultsScreen: DomesticResultsScreen,
  },
  {
    initialRouteName: 'DomesticResultsScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
