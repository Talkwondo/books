import {NavigationProp} from '@react-navigation/native';
import {Book} from './store.modal';
import {Dispatch} from 'react';
import {Action} from 'redux';

type RootStackParamListDrawer = {
  Drawer: any;
};

type RootMain = {
  Modal: any;
};

export interface LoginProps {
  navigation: NavigationProp<RootStackParamListDrawer, 'Drawer'>;
}

export interface MainProps extends ExpensesProps {
  navigation: NavigationProp<RootMain, 'Modal'>;
  deleteBookFunc: (id: string) => Dispatch<Action>;
}

export interface AddBookProps {
  addBook: (book: Book) => Dispatch<Action>;
  navigation: NavigationProp<RootStackParamListDrawer, 'Drawer'>;
  editBookAction: (book: Book) => Dispatch<Action>;
  route: any;
}

export interface ExpensesProps {
  books: Book[];
}
