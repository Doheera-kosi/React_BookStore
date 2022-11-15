/* eslint-disable */
import BookItem from './BookItem';
import AddBook from './AddBook';
import { useSelector } from 'react-redux';

const Books = () => {
  const data = useSelector((state) => state.book)
  
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