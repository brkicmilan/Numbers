const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  telephonenumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 13
  }
}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)

module.exports = { Book }