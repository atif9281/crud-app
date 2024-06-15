import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import axios from 'axios';
import './user.css';

const Getbooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/books/');
        setBooks(response.data.data.books); // Assuming response structure has a 'data' object containing 'books'
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/books/${bookId}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className='userTable'>
      <Link to='/add' className='addButton'>Add Book</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{new Date(book.published_at).toLocaleDateString()}</td> {/* Adjust date format as per your schema */}
                <td className='actionButtons'>
                  <button onClick={() => deleteBook(book._id)}><i className='fa-solid fa-trash'></i></button>
                  <Link to={`/edit/${book._id}`}><i className='fa-solid fa-pen-to-square'></i></Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Getbooks;