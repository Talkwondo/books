import {StyleSheet} from 'react-native';
import {getWidth} from '../../Utils/dimentions';

export const styles = StyleSheet.create({
  contianer: {
    alignSelf: 'center',
    display: 'flex',
    borderRadius: 10,
    paddingHorizontal: getWidth() * 0.25,
    paddingVertical: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
