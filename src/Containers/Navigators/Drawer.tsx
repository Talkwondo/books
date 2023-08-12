import * as React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Main from '../Main/Main';
import AddBook from '../AddBook';
import Expenses from '../Expenses';
import {removeLogin} from '../../Utils/storage';

const DrawerNavigator = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={async () => {
          await removeLogin();
          props.navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        headerShown: true,
        headerTintColor: 'white',
        headerShadowVisible: false,
      }}>
      <DrawerNavigator.Screen
        options={{unmountOnBlur: true}}
        name="Books Expenses Tracking"
        component={Main}
      />
      <DrawerNavigator.Screen name="Add a book" component={AddBook} />
      <DrawerNavigator.Screen name="Show expenses" component={Expenses} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
