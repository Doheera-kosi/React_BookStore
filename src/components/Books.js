/* eslint-disable */
import BookItem from './BookItem';
import AddBook from './AddBook';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const data = useSelector((state) => state.book)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks())
  }, []);

  return (
    <div className='displayContainer' >
      {!data.length ? (
        <p>No books available</p>
      ) : null}
      { 
      data && 
        data.map((item) => {
      return <BookItem key={item.item_id} title={item.title} author={item.author} id={item.item_id} />
      }) 
      }
      <AddBook />
    </div>
  )
}

export default Books;