/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { delBook, addBook, getAllBooks } from '../API';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

// Default books
const initialState = [];

// Reducers
const booksReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.payload];
    
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload)

    default:
      return state;
  }
};

const getBooks = () => async (dispacth) => {
  const res = await getAllBooks();
  dispacth({
    type: GET_BOOK,
    payload: res,
  });
};

const addbook = (payload) => async (dispacth) => {
  await addBook(payload);
  dispacth({
    type: ADD_BOOK,
    payload,
  });
};

const removeBook = (payload) => async (dispacth) => {
  await delBook(payload);
  dispacth({
    type: REMOVE_BOOK,
    payload,
  });
};

export default booksReducer;
export { addbook, removeBook, getBooks }