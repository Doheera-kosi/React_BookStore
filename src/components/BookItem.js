/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books'

const BookItem = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className='displayBooks'>
      <p className='book'>{' '} Book Title: {title}</p>
      <p className='book'>{' '} Book Author: {author}</p>
      <button type='button' className='removeBtn' onClick={() => deleteBook(id)}>Delete</button>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

}

export default BookItem;