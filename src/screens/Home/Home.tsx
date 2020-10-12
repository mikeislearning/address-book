import React, { FC, useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'src/navigation/NavContainer';
import { RootRoutes } from 'src/navigation/routes';

import { Loading } from 'src/components/Loading';

import { Contact } from 'src/types';

// import { logger } from 'src/utils/logger';

import styles from './Home.styles';

/**
 * Home Screen
 *
 */

type HomeNavProp = StackNavigationProp<RootStackParamList, RootRoutes.HOME>;

interface HomeProps {
  loading: boolean;
  data: Contact[];
  navigation: HomeNavProp;
  listContacts: any;
}

const Home: FC<HomeProps> = ({ loading, data, listContacts, navigation }) => {
  useEffect(() => {
    listContacts();
    // eslint-disable-next-line
  }, []);

  const [currentFilter, setFilter] = useState('');

  const filteredData = data.filter(
    (contact: Contact) =>
      contact.name.first.includes(currentFilter) ||
      contact.name.last.includes(currentFilter)
  );

  const renderContact = (info: ListRenderItemInfo<Contact>) => {
    const contact = info.item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(RootRoutes.PERSON, { contact })}
        style={styles.contact}
      >
        <Text style={styles.first}>{contact.name.first} </Text>
        <Text style={styles.last}>{contact.name.last}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={(text: string) => setFilter(text)}
          />
          <FlatList
            style={styles.list}
            renderItem={renderContact}
            data={filteredData}
            ListEmptyComponent={
              <View>
                <Text>No contacts found</Text>
              </View>
            }
            keyExtractor={(item): string => `${item.email}`}
          />
        </>
      )}
    </>
  );
};

export default Home;
