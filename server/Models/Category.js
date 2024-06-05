const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }] // Array of exercise IDs
})

module.exports = mongoose.model('Category', categorySchema);
