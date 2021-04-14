const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemShippingSchema = new Schema({
  id: String,
  description: String,
  quantity: Number,
  dimensions: String,
  dimensions_source: {
    id: String,
    origin: String,
  },
});

module.exports = mongoose.model('ItemShipping', itemShippingSchema);
