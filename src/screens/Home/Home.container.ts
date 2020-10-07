import { connect } from 'react-redux';

import { listContacts } from 'src/actions';

import Home from './Home';

const mapStateToProps = (state: any) => ({
  data: state.contacts,
  loading: state.contacts.loading,
  error: state.contacts.error,
});

export default connect(mapStateToProps, { listContacts })(Home);
