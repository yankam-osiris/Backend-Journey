const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product must have a name'], 
        unique: true, 
        trim: true,  
        maxlength: [40, 'Product name must be less than 40 characters']
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'A product must have a category'],
        enum: {
            values: ['Electronics', 'Clothing', 'Food', 'Office'],
            message: 'Category must be either: Electronics, Clothing, Food, or Office'
        }
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true 
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;