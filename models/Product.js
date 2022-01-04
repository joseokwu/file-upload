const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  image: {
    type: String,
    required: [true, 'Please upload image'],
  },
});

module.exports = mongoose.model('Product', ProductSchema);
