/* eslint-disable */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducers = combineReducers({
  book: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducers
});

export default store;

