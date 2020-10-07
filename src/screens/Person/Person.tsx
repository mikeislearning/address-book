import React, { FC } from 'react';
import { Text, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'src/navigation/NavContainer';
import { RootRoutes } from 'src/navigation/routes';

import styles from './Person.styles';

/**
 * Home Screen
 *
 * Show a list of addresses
 */

type ProfileNavProp = StackNavigationProp<RootStackParamList, RootRoutes.HOME>;

interface HomeProps {
  navigation: ProfileNavProp;
}

const Person: FC<HomeProps> = () => {
  /* 1. Get/Set User
   *
   * - makes two single time calls to determine what user to display
   */
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text>Person screen</Text>
    </ScrollView>
  );
};

export default Person;
