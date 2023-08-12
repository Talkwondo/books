import {Dispatch, SetStateAction} from 'react';
import {Book} from './store.modal';
import {NavigationProp} from '@react-navigation/native';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type RootStackParamListDrawer = {
  Modal: any;
};
export interface ButtonProps {
  text: string;
  backgroundColor: string;
  callback: () => void;
  customeStyle?: StyleProp<ViewStyle>;
  customeTextStyle?: StyleProp<TextStyle>;
}

export interface BookCardProps {
  book: Book;
  deleteBook: (id: string) => void;
  edit: string;
  navigation: NavigationProp<RootStackParamListDrawer, 'Modal'>;
  setEdit: Dispatch<SetStateAction<string>>;
}

export interface TextInputFieldProps {
  onChange: Dispatch<SetStateAction<string | number>>;
  value: string;
  number?: boolean;
  title: string;
}

export interface classTextInputProps {
  title: string;
  callback: () => void;
  date: string;
}
