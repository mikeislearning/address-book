import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from 'src/screens/Home';
import { Person } from 'src/screens/Person';

import { RootRoutes } from './routes';

/**
 * Navigation Container
 *
 */

export type RootStackParamList = {
  [RootRoutes.HOME]: undefined;
  [RootRoutes.PERSON]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={RootRoutes.HOME} component={Home} />
      <RootStack.Screen name={RootRoutes.PERSON} component={Person} />
    </RootStack.Navigator>
  );
};

export const RootContainer = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
