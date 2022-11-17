import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [dataTitle, setTitle] = useState('');
  const [dataAuthor, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: v4(), title: dataTitle, author: dataAuthor, category: '',
    };
    setTitle('');
    setAuthor('');
    dispatch(addBook(newBook));
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <span> Add New Book</span>
        <input className="input" onChange={(e) => setTitle(e.target.value)} value={dataTitle} type="text" placeholder="Title" />
        <input className="input" onChange={(e) => setAuthor(e.target.value)} value={dataAuthor} type="text" placeholder="Author" />
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
