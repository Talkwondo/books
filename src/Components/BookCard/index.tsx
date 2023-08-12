import * as React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {BookCardProps} from '../../Types/components.modal';
import {styles} from './styles';
//@ts-ignore
import Chevron from '../../Assets/chevron-up-arrow.svg';
//@ts-ignore
import OpenChevron from '../../Assets/chevron-down.svg';

const BookCard = ({
  book,
  edit,
  setEdit,
  deleteBook,
  navigation,
}: BookCardProps) => {
  return (
    <View style={styles.contianerBook}>
      <View style={styles.row}>
        <Text style={styles.text}>{book.name}</Text>
        <Text style={styles.text}>{book.author}</Text>
        <Text style={styles.text}>{book.purchaseDay}</Text>
        <Text style={styles.text}>{book.price}$</Text>
        <TouchableOpacity
          onPress={() => {
            edit.length && edit === book.id ? setEdit('') : setEdit(book.id);
          }}>
          {edit === book.id ? (
            <OpenChevron width={30} height={30} />
          ) : (
            <Chevron width={30} height={30} />
          )}
        </TouchableOpacity>
      </View>
      {edit === book.id && (
        <View style={styles.extention}>
          <View style={styles.row}>
            <Button
              title={'edit'}
              onPress={() => {
                navigation.navigate('Modal', book);
              }}
            />
            <Button title={'delete'} onPress={() => deleteBook(book.id)} />
          </View>
        </View>
      )}
    </View>
  );
};

export default BookCard;
