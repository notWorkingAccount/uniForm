const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var degreeSchema = new Schema({
    text: String,
    author: String
});

module.exports = mongoose.model("degree", degreeSchema);