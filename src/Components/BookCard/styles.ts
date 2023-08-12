import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contianerBook: {
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  extention: {
    height: 40,
    paddingTop: 5,
    borderRadius: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  text: {
    display: 'flex',
    fontSize: 15,
    lineHeight: 30,
  },
});
