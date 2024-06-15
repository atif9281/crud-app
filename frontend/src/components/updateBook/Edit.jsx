import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import './edit.css'; // Importing the edit.css for styling

const Edit = () => {
  const { id } = useParams(); // Fetching book ID from URL params
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishedDate: ""
  });

  // Function to handle input changes in the form
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Function to fetch book data by ID on component mount
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/books/${id}`)
      .then((response) => {
        setBook(response.data.data.book); // Assuming response structure has a 'data' object containing 'book'
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Function to submit updated book data to backend
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/api/v1/books/${id}`, book);
      navigate("/");
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className='editBook'>
      <Link to={"/"} className="backButton">Back</Link>
      <h3>Update Book</h3>
      <form className='editBookForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={book.title}
            onChange={inputChangeHandler}
            id="title"
            name="title"
            autoComplete='off'
            placeholder='Title'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={book.author}
            onChange={inputChangeHandler}
            id="author"
            name="author"
            autoComplete='off'
            placeholder='Author'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="publishedDate">Published Date</label>
          <input
            type="date"
            value={book.publishedDate}
            onChange={inputChangeHandler}
            id="publishedDate"
            name="publishedDate"
            autoComplete='off'
            required
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;