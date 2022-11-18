import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [dataTitle, setTitle] = useState('');
  const [dataAuthor, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: v4(), title: dataTitle, author: dataAuthor, category,
    };
    setTitle('');
    setAuthor('');
    setCategory('');
    dispatch(addBook(newBook));
  };

  const add = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <span className="new-book"> ADD NEW BOOK</span>
        <div className="div2">
          <input className="input" onChange={(e) => setTitle(e.target.value)} value={dataTitle} type="text" placeholder="Book title" />
          <input className="input" onChange={(e) => setAuthor(e.target.value)} value={dataAuthor} type="text" placeholder="Author" />
          <select name="select" className="select" onChange={add}>
            <option value="categories" selected disabled>categories</option>
            <option>Fantasy</option>
            <option>Emotional</option>
            <option>Drama</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Thriller</option>
            <option>Animation</option>
            <option>Crime</option>
            <option>Horror</option>
          </select>
          <button type="submit" className="submitBtn">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
