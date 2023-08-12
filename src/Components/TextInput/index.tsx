import * as React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {
  TextInputFieldProps,
  classTextInputProps,
} from '../../Types/components.modal';

export const TextInputField = ({
  onChange,
  value,
  title,
  number,
}: TextInputFieldProps) => {
  return (
    <View style={styles.input}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        onChangeText={onChange}
        value={value}
        onFocus={() => onChange('')}
        keyboardType={number ? 'number-pad' : 'default'}
        style={styles.textInput}
      />
    </View>
  );
};

export class ButtonTextFeild extends React.Component<classTextInputProps, {}> {
  constructor(props: classTextInputProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.input}>
        <Text style={styles.text}>{this.props.title}</Text>
        <TouchableOpacity
          onPress={this.props.callback}
          style={styles.dateStyle}>
          <Text style={styles.textInput}>{this.props.date}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default ButtonTextFeild;
