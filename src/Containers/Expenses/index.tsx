import * as React from 'react';

import {View, Text} from 'react-native';
import {containerStyle} from '../containerStyle';
import {styles} from './styles';
import {connect} from 'react-redux';
import {InitialState} from '../../Types/reducer.modal';
import {ExpensesProps} from '../../Types/container.modal';
const Expenses = ({books}: ExpensesProps) => {
  const caculteExpense = () =>
    books.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

  return (
    <View style={[containerStyle.container, styles.contianer]}>
      <Text style={styles.h1}>The Total Expenses</Text>
      <Text style={styles.h1}>{`Books: ${books.length}`}</Text>
      <Text style={styles.h1}>{`Total expenses: ${caculteExpense()}$`}</Text>
    </View>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Expenses);
