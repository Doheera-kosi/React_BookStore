/* eslint-disable */
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';
import React, { useState } from 'react';

const AddBook = (props) => {
  const [data_Title, set_Title] = useState('');
  const [data_Author, set_Author] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {id: uuid(), title: data_Title, author: data_Author};
    set_Title('');
    set_Author('');
    dispatch(addBook(newBook))
  }
  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Add a new book</label>
        <input className='input' onChange={(e) => set_Title(e.target.value)} value={data_Title} type='text' placeholder='Title'/>
        <input className='input' onChange={(e) => set_Author(e.target.value)} value={data_Author} type='text' placeholder='Author'/>
        <button type='submit' className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook;