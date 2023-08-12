import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const getWidth = () => width;
export const getHeight = () => height;
