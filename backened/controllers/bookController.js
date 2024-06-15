const Book = require('../models/bookModel');
const mongoose = require('mongoose');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: 'success',
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid ID format',
      });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'No book found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Book created successfully',
      data: {
        book: newBook,
      },
    });
  } catch (err) {
    console.error("Error creating book:", err.message);
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid ID format',
      });
    }

    const book = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'No book found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Book updated successfully',
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid ID format',
      });
    }

    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'No book found with that ID',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Book deleted successfully',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};