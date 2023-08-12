import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {View, Text, TextInput, FlatList, SafeAreaView} from 'react-native';
import {containerStyle} from '../containerStyle';
import {connect} from 'react-redux';
import {InitialState} from '../../Types/reducer.modal';
import {MainProps} from '../../Types/container.modal';
import BookCard from '../../Components/BookCard';
import {Book} from '../../Types/store.modal';
import {styles as styleMain, styles} from './styles';
//@ts-ignore
import Icon from '../../Assets/icons-search.svg';
import {deleteBook} from '../../Store/actions';
import {actionDeleteBook} from '../../Types/actions.modal';
import {Button} from '../../Components/Button';

const Main = ({books, deleteBookFunc, navigation}: MainProps) => {
  const [filterBooks, setFilterBooks] = useState<Book[]>(books);
  const [filterCategory, setFilterCategory] = useState('name');
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState('');
  const deleteBookFromBooks = (id: string) => deleteBookFunc(id);

  const searchBook = useCallback(
    (text: string) => {
      const filtered = books.filter(book =>
        String(book[filterCategory as keyof typeof book])
          .toLowerCase()
          .includes(text.toLowerCase()),
      );
      setSearch(text);
      setFilterBooks(filtered);
    },
    [books, filterCategory],
  );

  useEffect(() => {
    setFilterBooks(books);
    searchBook(search);
  }, [books, filterCategory, search, searchBook]);

  return (
    <SafeAreaView style={[containerStyle.container, styles.container]}>
      <View style={styles.searchBar}>
        <View style={styleMain.row}>
          <TextInput
            clearButtonMode="always"
            style={styleMain.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={searchBook}
          />
          <Icon width={30} height={40} />
        </View>
        <View style={styleMain.row}>
          <Button
            text={'by Name'}
            backgroundColor={filterCategory === 'name' ? '#5E5BFF' : 'grey'}
            callback={() => setFilterCategory('name')}
            customeStyle={styleMain.button}
            customeTextStyle={styleMain.text}
          />
          <Button
            text={'by Author'}
            backgroundColor={filterCategory === 'author' ? '#5E5BFF' : 'grey'}
            callback={() => setFilterCategory('author')}
            customeStyle={styleMain.button}
            customeTextStyle={styleMain.text}
          />
          <Button
            text={'by Date'}
            backgroundColor={
              filterCategory === 'purchaseDay' ? '#5E5BFF' : 'grey'
            }
            callback={() => setFilterCategory('purchaseDay')}
            customeStyle={styleMain.button}
            customeTextStyle={styleMain.text}
          />
          <Button
            text={'by Price'}
            backgroundColor={filterCategory === 'price' ? '#5E5BFF' : 'grey'}
            callback={() => setFilterCategory('price')}
            customeStyle={styleMain.button}
            customeTextStyle={styleMain.text}
          />
        </View>
      </View>
      <View style={styleMain.pad}>
        {books?.length ? (
          <FlatList
            data={filterBooks}
            renderItem={({item}) => {
              return (
                <BookCard
                  navigation={navigation}
                  setEdit={setEdit}
                  edit={edit}
                  book={item}
                  deleteBook={deleteBookFromBooks}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.textNoBooks}>
            No books yet please add from the sidebar
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (
  dispatch: (deleteBook: actionDeleteBook) => void,
) => {
  return {
    deleteBookFunc: (id: string) => dispatch(deleteBook(id)),
  };
};

const mapStateToProps = (state: InitialState) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
