import {
  actionSetBooks,
  ActionBooks,
  actionDeleteBook,
  actionEditBooks,
} from '../Types/actions.modal';
import {Book} from '../Types/store.modal';

export const setBook = (book: Book): actionSetBooks => {
  return {
    type: ActionBooks.SET_BOOK,
    payload: book,
  };
};

export const deleteBook = (id: string): actionDeleteBook => {
  return {
    type: ActionBooks.DELETE_BOOK,
    payload: id,
  };
};

export const editBook = (book: Book): actionEditBooks => {
  return {
    type: ActionBooks.EDIT_BOOK,
    payload: book,
  };
};
