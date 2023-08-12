import Expenses from '../src/Containers/Expenses';
import uuid from 'react-native-uuid';
import {render} from '@testing-library/react-native';
import {Book} from '../src/Types/store.modal';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
import React = require('react');

const mockBooks: Book[] = [
  {
    name: 'Harry Hacker',
    author: 'Tal Talmon',
    price: 1000,
    purchaseDay: '10/10/21',
    id: uuid.v4() as string,
  },
  {
    name: 'The anonymous Hacker',
    author: 'Tal Talmon',
    price: 2500,
    purchaseDay: '10/10/21',
    id: uuid.v4() as string,
  },
];
const mockStore = configureStore([]);
const initialState = {
  books: mockBooks,
};
const store = mockStore(initialState);

describe('Expenses', () => {
  it('calculates the total expenses', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Expenses />
      </Provider>,
    );

    const totalExpensesText = getByText('Total expenses: 3500$');
    expect(totalExpensesText).toBeTruthy();
  });
});
