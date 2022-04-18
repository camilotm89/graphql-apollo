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
console.log(bookSchema);
module.exports=bookSchema;