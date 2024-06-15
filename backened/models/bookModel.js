const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A book must have a title']
  },
  author: {
    type: String,
    required: [true, 'A book must have an author']
  },
  no_of_pages: {
    type: Number,
    required: [true, 'A book must have a number of pages']
  },
  published_at: {
    type: Date,
    required: [true, 'A book must have a publication date']
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;