import React, { FC, useEffect } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'src/navigation/NavContainer';
import { RootRoutes } from 'src/navigation/routes';

import { Loading } from 'src/components/Loading';

// import { logger } from 'src/utils/logger';

import styles from './Home.styles';

/**
 * Home Screen
 *
 * 1. Have a lazy query checking if the user exists
 * 2. Show the user a bunch of buttons
 */

type ProfileNavProp = StackNavigationProp<RootStackParamList, RootRoutes.HOME>;

interface HomeProps {
  error: Error;
  loading: boolean;
  data: any;
  navigation: ProfileNavProp;
  listContacts: any;
}

const Home: FC<HomeProps> = ({
  error,
  loading,
  data,
  listContacts,
  navigation,
}) => {
  useEffect(() => {
    listContacts();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(RootRoutes.PERSON)}>
        <Text>Go to person screen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
