/* eslint-disable */

const REMOVE_BOOK = 'BOOK_REMOVED';
const ADD_BOOK = 'BOOK_ADDED';
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        { id: action.id,
          title: action.title,
          author: action.author
        }
      ]
    
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id)

    default:
      return state
  }

};

export const addBook = (id, title, author) => {
  return {
    type: ADD_BOOK, id, title, author
  }
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id
  }
};

export default booksReducer;