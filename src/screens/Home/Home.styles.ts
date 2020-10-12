import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contact: {
    paddingVertical: 10,
    paddingLeft: 10,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
  },
  first: {
    fontWeight: '500',
    fontSize: 20,
  },
  last: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    margin: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  list: {
    marginHorizontal: 20,
  },
  content: {
    marginBottom: 20,
  },
});

export default styles;
