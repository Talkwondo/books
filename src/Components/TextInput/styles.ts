import {StyleSheet} from 'react-native';
import {getWidth} from '../../Utils/dimentions';

export const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    alignSelf: 'center',
    width: getWidth() * 0.667,
    margin: 12,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 30,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
  },
  dateStyle: {
    backgroundColor: 'white',
  },
});
