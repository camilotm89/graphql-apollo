const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: String,
    isbn: String,
    synopsis: String,
    genres: String,
    publicationYear: Number,
    author: Number,
    publisher: Number

})

module.exports= model('book', bookSchema);