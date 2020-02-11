import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/home';

const appNavigator = createStackNavigator({
  Home: Home,
});
const appContainer = createAppContainer(appNavigator);
export default appContainer;
