/* eslint-disable */
import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    setData([{id: 1, title:'Great Expectation', author: 'Evans'}, {id: 2, title:'I Can Do', author: 'Ican'}]);
  }, []);
  
  return (
    <div className='displayContainer' >
      { 
      data && 
        data.map((item) => {
      return <BookItem key={item.id} title={item.title} author={item.author} id={item.id} />
      }) 
      }
      <AddBook />
    </div>
  )
}

export default Books;