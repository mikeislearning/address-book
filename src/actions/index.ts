import { Alert } from 'react-native';

import { Contact } from 'src/types';

import {
  LIST_CONTACTS_SUCCESS,
  LIST_CONTACTS_ERROR,
  LIST_CONTACTS_LOADING,
} from '../actionTypes';

const listContactsLoading = {
  type: LIST_CONTACTS_LOADING,
};

const listContactsSuccess = (data: Contact[]) => ({
  type: LIST_CONTACTS_SUCCESS,
  data,
});

const listContactsError = (error: string) => ({
  type: LIST_CONTACTS_ERROR,
  error,
});

const API_URL = 'https://randomuser.me/api/?results=50';

export const listContacts = () => async (dispatch: any) => {
  try {
    dispatch(listContactsLoading);
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(listContactsSuccess(data.results));
  } catch (err) {
    dispatch(listContactsError(err.toString()));
    Alert.alert(`Uh oh, looks like an error occurred: ${err.toString()}`);
  }
};
