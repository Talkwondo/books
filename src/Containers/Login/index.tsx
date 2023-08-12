import * as React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../Components/Button';
import {containerStyle} from '../containerStyle';
import {LoginProps} from '../../Types/container.modal';
import {saveLogin} from '../../Utils/storage';
import {TextInputField} from '../../Components/TextInput';

const Login = ({navigation}: LoginProps) => {
  const [name, setName] = useState('');

  return (
    <View style={containerStyle.container}>
      <TextInputField
        onChange={setName}
        value={name}
        title={'Enter full name'}
      />
      <Button
        text={'Login'}
        backgroundColor={'#5E5BFF'}
        callback={async () => {
          if (name.length) {
            await saveLogin();
            navigation.navigate('Drawer');
          }
        }}
      />
    </View>
  );
};

export default Login;
