const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  id: Number,
  nickname: String,
  last_name: String,
  first_name: String,
  email: String,
  phone: {
    number: String,
  },
});

module.exports = mongoose.model('Seller', sellerSchema);
