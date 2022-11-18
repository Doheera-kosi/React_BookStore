import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();

  const {
    title, author, id, category,
  } = props;

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="displayBooks">
      <div className="div-a">
        <p className="book">
          {' '}
          {' '}
          Category:
          {' '}
          {category}
        </p>
        <p className="book-title">
          {' '}
          {' '}
          Book Title:
          {' '}
          {title}
        </p>
        <p className="book-auth">
          {' '}
          {' '}
          Book Author:
          {' '}
          {author}
        </p>
        <div className="btns">
          <button type="button" className="removeBtn">Comments</button>
          <span className="vl" />
          <button type="button" className="removeBtn" onClick={() => deleteBook(id)}>Remove</button>
          <span className="vl" />
          <button type="button" className="removeBtn">Edit</button>
        </div>
      </div>
      <div className="div-b">
        <div className="Oval-2" />
        <div className="status">
          <span className="span-a">100%</span>
          <span className="span-b">Completed</span>
        </div>
      </div>
      <span className="vll" />
      <div className="div-c">
        <span className="cur-chap">CURRENT CHAPTER</span>
        <span className="chap">Chapter 1000</span>
        <button type="button" className="prog-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

BookItem.defaultProps = {
  title: 'title',
  author: 'author',
  id: 'id',
  category: 'category',
};

export default BookItem;
