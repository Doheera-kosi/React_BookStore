import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_BOOK = 'book/BookStore/GET_BOOK';
const ADD_BOOK = 'book/BookStore/BOOK_ADDED';
const REMOVE_BOOK = 'book/BookStore/BOOK_REMOVED';
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mG3tUSvmSMLlWNSXKaVe/books';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    case `${GET_BOOK}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const getBooks = createAsyncThunk((GET_BOOK), async () => {
  const res = await axios.get(apiURL);
  const books = res.data;
  const newArray = Object.keys(books).map((id) => ({
    id,
    author: books[id][0].author,
    title: books[id][0].title,
    category: books[id][0].category,
  }));
  return newArray;
});

export const addBook = createAsyncThunk((ADD_BOOK), async (payload, thunkApi) => {
  const {
    id, title, author, category,
  } = payload;
  await axios.post(apiURL, {
    item_id: id,
    title,
    author,
    category,
  });
  thunkApi.dispatch(getBooks());
});

export const removeBook = createAsyncThunk((REMOVE_BOOK), async (id) => {
  await axios.delete(`${apiURL}/${id}`);
  return id;
});

export default booksReducer;
