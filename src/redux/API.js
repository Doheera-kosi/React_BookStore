// import axios from 'axios';

// const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mG3tUSvmSMLlWNSXKaVe/books';

// const getAllBooks = async () => {
//   const res = await axios.get(URL);
//   const books = Object.keys(res.data).map((key) => ({
//     item_id: key,
//     title: res.data[key][0].title,
//     author: res.data[key][0].author,
//     category: res.data[key][0].category,
//   }));
//   return books;
// };

// // Function to Add Books
// const addBook = async (book) => {
//   const res = await axios.post(URL, book);
//   return res.data;
// };

// // Function to Delete Books
// const delBook = async (id) => {
//   const res = await axios.delete(`${URL}/${id}`);
//   return res.data;
// };

// export { addBook, delBook, getAllBooks };
