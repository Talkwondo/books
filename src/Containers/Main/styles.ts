import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 20,
  },
  searchInput: {
    flexGrow: 4,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  textNoBooks: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  pad: {
    flex: 1,
    marginTop: 15,
  },
  icon: {
    flexGrow: 1,
  },
  button: {
    paddingHorizontal: 5,
    marginHorizontal: 2,
  },
  text: {
    fontSize: 17,
  },
  searchBar: {
    height: 100,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
