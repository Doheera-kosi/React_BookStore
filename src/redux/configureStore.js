/* eslint-disable */

import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducers = combineReducers({
  book: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducers
}, applyMiddleware(thunk));

export default store;
