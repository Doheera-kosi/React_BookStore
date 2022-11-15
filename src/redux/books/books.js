/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';

const REMOVE_BOOK = 'BOOK_REMOVED';
const ADD_BOOK = 'BOOK_ADDED';
const initialState = [
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
  {
    id: uuidv4(),
    title: 'The Great Controversy',
    author: 'Ellen G. White'
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ]
    
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id)

    default:
      return state
  }
};

export const addBook = (payload) => {
  const { id, title, author } = payload;
  return {
    type: ADD_BOOK, 
    book: { id, title, author }
  }
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id,
  }
};

export default booksReducer;