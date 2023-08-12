import {Book} from './store.modal';

export enum ActionBooks {
  SET_BOOK = 'SET_BOOK',
  EDIT_BOOK = 'EDIT_BOOK',
  DELETE_BOOK = 'DELETE_BOOK ',
}

export type ActionReducer = actionSetBooks | actionDeleteBook | actionEditBooks;

export interface actionSetBooks {
  type: ActionBooks.SET_BOOK;
  payload: Book;
}

export interface actionEditBooks {
  type: ActionBooks.EDIT_BOOK;
  payload: Book;
}

export interface actionDeleteBook {
  type: ActionBooks.DELETE_BOOK;
  payload: string;
}
