import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorProps} from '../../Types/navigator.modal';
import Login from '../Login';
import Drawer from './Drawer';
import AddBook from '../AddBook';

const Stack = createStackNavigator();

const Navigator = ({initialRoute}: NavigatorProps): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Modal" component={AddBook} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
