import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.css';

const Add = () => {
  const initialBookState = {
    title: "",
    author: "",
    no_of_pages: 0,
    published_at: ""
  };

  const [book, setBook] = useState(initialBookState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/books/", book);
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className='addBook'>
      <Link to={"/"} className="backButton">Back</Link>
      <h3>Add new book</h3>
      <form className='addBookForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={inputHandler}
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
            onChange={inputHandler}
            id="author"
            name="author"
            autoComplete='off'
            placeholder='Author'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="no_of_pages">Number of Pages</label>
          <input
            type="number"
            onChange={inputHandler}
            id="no_of_pages"
            name="no_of_pages"
            autoComplete='off'
            placeholder='Number of Pages'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="published_at">Publication Date</label>
          <input
            type="date"
            onChange={inputHandler}
            id="published_at"
            name="published_at"
            autoComplete='off'
            required
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Add;