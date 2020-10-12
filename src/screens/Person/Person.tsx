import React, { FC } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from 'src/navigation/NavContainer';
import { RootRoutes } from 'src/navigation/routes';

import styles from './Person.styles';

/**
 * Person Screen
 *
 * Show a single contact
 */

type PersonNavProp = StackNavigationProp<RootStackParamList, RootRoutes.PERSON>;
type PersonRouteProp = RouteProp<RootStackParamList, RootRoutes.PERSON>;

interface HomeProps {
  navigation: PersonNavProp;
  route: PersonRouteProp;
}

const Person: FC<HomeProps> = ({ route }) => {
  const { contact } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: contact.picture.medium }} />
        <Text style={styles.name}>
          {contact.name.first} {contact.name.last}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Person;
