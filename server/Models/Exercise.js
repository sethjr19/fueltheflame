const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    area: String,
    description: String,
    difficulty: Number,
});

module.exports = mongoose.model('Exercise', exerciseSchema);