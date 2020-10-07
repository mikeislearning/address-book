import {
  LIST_CONTACTS_SUCCESS,
  LIST_CONTACTS_ERROR,
  LIST_CONTACTS_LOADING,
} from '../actionTypes';

const listContactsSuccess = (data: object) => ({
  type: LIST_CONTACTS_SUCCESS,
  data,
});

const listContactsError = (error: object) => ({
  type: LIST_CONTACTS_ERROR,
  error,
});
const listContactsLoading = {
  type: LIST_CONTACTS_LOADING,
};

const API_URL = 'https://randomuser.me/api/?results=50';

export const listContacts = () => async (dispatch: any) => {
  try {
    dispatch(listContactsLoading);
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log('1. RESULTS ARE then', data);

    dispatch(listContactsSuccess(data.results));
  } catch (err) {
    dispatch(listContactsError(err.response));
  }
};
