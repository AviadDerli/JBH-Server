const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    modelId: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: String,
        required: true,
    },
    manufacture: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    horsepower:
    {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }

})
const carModel = mongoose.model('car', carSchema)
module.exports = carModel;


// const cars = [
//     { "categoryName": "Sedan", "modelId": "7890123", "model": "Accord", "manufacture": "Honda", "price": 28000, "horsepower": 190, "year": 2023, "color": "Silver" },
//     { "categoryName": "Sports Car", "modelId": "8901234", "model": "Pilot", "manufacture": "Honda", "price": 36000, "horsepower": 250, "year": 2023, "color": "White" },
//     { "categoryName": "Sedan", "modelId": "9012345", "model": "F-150", "manufacture": "Ford", "price": 32000, "horsepower": 310, "year": 2023, "color": "Blue" },
//     { "categoryName": "Sedan", "modelId": "0123456", "model": "Corvette", "manufacture": "Chevrolet", "price": 55000, "horsepower": 450, "year": 2023, "color": "Red" },
//     { "categoryName": "Sedan", "modelId": "1234509", "model": "Harley", "manufacture": "Harley-Davidson", "price": 18000, "horsepower": 120, "year": 2023, "color": "Black" },
//     { "categoryName": "Sedan", "modelId": "2345678", "model": "Odyssey", "manufacture": "Honda", "price": 33000, "horsepower": 200, "year": 2023, "color": "Gray" },
//     { "categoryName": "SUV", "modelId": "3456789", "model": "Civic", "manufacture": "Honda", "price": 23000, "horsepower": 180, "year": 2023, "color": "Green" },
//     { "categoryName": "SUV", "modelId": "4566690", "model": "Highlander", "manufacture": "Toyota", "price": 38000, "horsepower": 270, "year": 2023, "color": "Yellow" },
//     { "categoryName": "SUV", "modelId": "5678901", "model": "Ram 1500", "manufacture": "Ram", "price": 34000, "horsepower": 300, "year": 2023, "color": "Orange" },
//     { "categoryName": "SUV", "modelId": "6789012", "model": "Challenger", "manufacture": "Dodge", "price": 42000, "horsepower": 350, "year": 2023, "color": "Purple" },
//     { "categoryName": "SUV", "modelId": "7890124", "model": "Indian Scout", "manufacture": "Indian Motorcycle", "price": 15000, "horsepower": 140, "year": 2023, "color": "Brown" },
//     { "categoryName": "SUV", "modelId": "8901235", "model": "Transit", "manufacture": "Ford", "price": 31000, "horsepower": 190, "year": 2023, "color": "Teal" },
//     { "categoryName": "Truck", "modelId": "9012347", "model": "Fit", "manufacture": "Honda", "price": 21000, "horsepower": 170, "year": 2023, "color": "Magenta" },
//     { "categoryName": "Truck", "modelId": "0123459", "model": "Rav4", "manufacture": "Toyota", "price": 34000, "horsepower": 220, "year": 2023, "color": "Cyan" },
//     { "categoryName": "Truck", "modelId": "1234509", "model": "Silverado 2500HD", "manufacture": "Chevrolet", "price": 38000, "horsepower": 310, "year": 2023, "color": "Lime" },
//     { "categoryName": "Motorcycle", "modelId": "2345679", "model": "Camaro", "manufacture": "Chevrolet", "price": 48000, "horsepower": 400, "year": 2023, "color": "Turquoise" },
//     { "categoryName": "Motorcycle", "modelId": "3456709", "model": "Ducati Panigale", "manufacture": "Ducati", "price": 20000, "horsepower": 180, "year": 2023, "color": "Indigo" },
//     { "categoryName": "Sports Car", "modelId": "4567890", "model": "Sprinter", "manufacture": "Mercedes-Benz", "price": 42000, "horsepower": 250, "year": 2023, "color": "Violet" },
//     { "categoryName": "Van", "modelId": "5628901", "model": "Altima", "manufacture": "Nissan", "price": 27000, "horsepower": 190, "year": 2023, "color": "Pink" },
//     { "categoryName": "Van", "modelId": "6789112", "model": "4Runner", "manufacture": "Toyota", "price": 37000, "horsepower": 270, "year": 2023, "color": "Maroon" },
// ]

// const go = async () => {
//     require("dotenv").config();
//     const db = require('./db')
//     db.connect()

//     await carModel.create(cars)
// }

// go()