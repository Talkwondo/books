import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../Types/components.modal';
import {styles} from './styles';
export const Button = ({
  text,
  backgroundColor,
  callback,
  customeStyle,
  customeTextStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.contianer, {backgroundColor}, customeStyle]}>
      <Text style={[styles.text, customeTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
