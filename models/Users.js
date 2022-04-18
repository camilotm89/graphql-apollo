const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type : String,
        required: true
    },
    lastName: String,
    age: Number 
});

module.exports=userSchema;