import * as React from 'react';
import {useState} from 'react';
import {containerStyle} from '../containerStyle';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Book} from '../../Types/store.modal';
import {editBook, setBook} from '../../Store/actions';
import {actionEditBooks, actionSetBooks} from '../../Types/actions.modal';
import {TextInputField} from '../../Components/TextInput';
import ButtonTextFeild from '../../Components/TextInput';
import DatePicker from 'react-native-date-picker';
import {Alert} from 'react-native';
import {Button} from '../../Components/Button';
import {AddBookProps} from '../../Types/container.modal';
import uuid from 'react-native-uuid';

const AddBook = ({
  addBook,
  editBookAction,
  route,
  navigation,
}: AddBookProps) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [openPicker, setOpenPicker] = useState(false);
  const book = route.params;
  React.useEffect(() => {
    if (book) {
      setName(book.name);
      setAuthor(book.author);
      setDate(new Date(book.purchaseDay));
      setPrice(book.price);
    }
  }, [book]);

  return (
    <View style={containerStyle.container}>
      <TextInputField onChange={setName} value={name} title={'Book name'} />
      <TextInputField onChange={setAuthor} value={author} title={'Author'} />
      <TextInputField
        number
        onChange={setPrice}
        value={String(price)}
        title={'Price'}
      />
      <ButtonTextFeild
        callback={() => setOpenPicker(true)}
        title={'Set date'}
        date={date.toLocaleDateString('en-GB')}
      />
      <DatePicker
        modal
        open={openPicker}
        date={date}
        onConfirm={(DatePicked: Date) => {
          setOpenPicker(false);
          setDate(DatePicked);
        }}
        onCancel={() => {
          setOpenPicker(false);
        }}
      />
      <Button
        text={'Save'}
        backgroundColor={'#68AE6F'}
        callback={() => {
          setName('');
          setAuthor('');
          setPrice(0);
          const newBook: Book = {
            name,
            author,
            purchaseDay: date.toLocaleDateString('en-GB'),
            price: Number(price),
            id: uuid.v4() as string,
          };
          if (book) {
            newBook.id = book.id;
            editBookAction(newBook);
            Alert.alert('Book is being updated');
            navigation.goBack();
          } else {
            addBook(newBook);
            Alert.alert('Book is being added');
          }
        }}
      />
    </View>
  );
};

const mapDispatchToProps = (
  dispatch: (actionBook: actionSetBooks | actionEditBooks) => void,
) => {
  return {
    addBook: (book: Book) => dispatch(setBook(book)),
    editBookAction: (book: Book) => dispatch(editBook(book)),
  };
};

export default connect(null, mapDispatchToProps)(AddBook);
