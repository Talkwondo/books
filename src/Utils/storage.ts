import AsyncStorage from '@react-native-async-storage/async-storage';

export const getInitalScreen = async (): Promise<string> => {
  const login = await AsyncStorage.getItem('login_success');
  return login ? 'Drawer' : 'Login';
};

export const saveLogin = async (): Promise<void> => {
  await AsyncStorage.setItem('login_success', 'true');
};

export const removeLogin = async (): Promise<void> => {
  await AsyncStorage.removeItem('login_success');
};
