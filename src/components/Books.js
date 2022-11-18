import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const data = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="displayContainer">
      {!data.length ? (
        <p className="no-books">No books available</p>
      ) : null}
      {
      data
        && data.map(
          (item) => <BookItem key={item.id} title={item.title} author={item.author} id={item.id} />,
        )
      }
      <AddBook />
    </div>
  );
};

export default Books;
