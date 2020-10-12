import {
  LIST_CONTACTS_SUCCESS,
  LIST_CONTACTS_ERROR,
  LIST_CONTACTS_LOADING,
} from '../actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const properties = (state = initialState, action: any) => {
  switch (action.type) {
    case LIST_CONTACTS_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case LIST_CONTACTS_ERROR:
      return { ...state, error: action.error, loading: false };
    case LIST_CONTACTS_LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default properties;
