const mongoose = require('mongoose');
const Category = require('../Models/Category');
const User = require('../Models/User')
const Exercise = require('../Models/Exercise');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fueltheflame')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define initial category data
const Exercises = [
    {
        name: 'Deadlift',
        area:'Legs',
        description: 'Deadlift description',
        difficulty: 5
    },
    {
        name: 'Bench Press',
        area:'Chest',
        description: 'Bench Press description',
        difficulty: 3
    },
    // Add more initial categories as needed
];

const Categories = [
    {
        name: 'Legs',
        description: 'Exercises for legs',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Chest',
        description: 'Exercises for chest',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Back',
        description: 'Exercises for the back',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Triceps',
        description: 'Tricep Exercises',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Shoulders',
        description: 'Exercises for the shoulder',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Biceps',
        description: 'Exercises for biceps',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Cardio',
        description: 'Cardio Exercises',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Pilates',
        description: 'Pilates',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Yoga',
        description: 'Yoga Exercises',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
    {
        name: 'Plyometric Exercises',
        description: 'Exercises to Jump Higher',
        imageUrl: '/card-img/legs.jpg',
        exercises: [] // Placeholder for exercise ObjectIds
    },
]

// Insert initial categories into the database
async function seedCategories() {

     for (const category of Categories) {
            await Category.insertMany(
                { name: category.name },
                { $set: { imageUrl: category.imageUrl } }
            );
        }
    console.log('updated!')
}


// Run the seed function
seedCategories();