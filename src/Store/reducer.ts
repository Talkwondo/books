import {ActionBooks, ActionReducer} from '../Types/actions.modal';
import {InitialState} from '../Types/reducer.modal';
import {Book} from '../Types/store.modal';

const INITIAL_STATE: InitialState = {
  books: [],
};

export const reducer = (
  state: InitialState = INITIAL_STATE,
  action: ActionReducer,
) => {
  switch (action.type as ActionBooks) {
    case ActionBooks.SET_BOOK:
      return {...state, books: [...state.books, action.payload]};
    case ActionBooks.EDIT_BOOK:
      const book = action.payload as Book;
      const allBooksForEdit = [...state.books];
      const edit = allBooksForEdit.findIndex(
        bookIndex => bookIndex.id === book.id,
      );
      if (edit !== -1) {
        allBooksForEdit[edit] = book as Book;
      }
      return {...state, books: allBooksForEdit};

    case ActionBooks.DELETE_BOOK:
      const allBooks = [...state.books];
      const remove = allBooks.findIndex(book => book.id === action.payload);
      allBooks.splice(remove, 1);
      return {...state, books: allBooks};
    default:
      return state;
  }
};
