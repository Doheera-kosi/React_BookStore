/* eslint-disable */
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addbook } from '../redux/books/books';
import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const newBook = { item_id: v4(), title, author, category: 'Novel' };
      dispatch(addbook(newBook))
      setTitle('');
      setAuthor('');
    }
  }

  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Add a new book</label>
        <input className='input' onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Title'/>
        <input className='input' onChange={(e) => setAuthor(e.target.value)} value={author} type='text' placeholder='Author'/>
        <button type='submit' className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook;