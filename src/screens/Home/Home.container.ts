import { connect } from 'react-redux';

import { listContacts } from 'src/actions';
import { Contact } from 'src/types';

import Home from './Home';

const sortAlphabetically = (a: Contact, b: Contact) =>
  a.name.first.localeCompare(b.name.first);

const mapStateToProps = (state: any) => {
  const sortedContacts = state.contacts.data.sort(sortAlphabetically);

  return {
    data: sortedContacts,
    loading: state.contacts.loading,
  };
};

const mapDispatchToProps = {
  listContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
