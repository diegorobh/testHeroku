import {combineReducers} from 'redux';
import dataBooks from './data-books';
import ActiveBook from './book_selected';

const dataState = combineReducers({
  books:dataBooks,
  activeBook:ActiveBook
})

export default dataState;

//el state