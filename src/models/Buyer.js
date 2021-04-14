const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyerSchema = new Schema({
  id: Number,
  nickname: String,
  last_name: String,
  first_name: String,
  email: String,
  phone: {
    number: String,
  },
  billing_info: {
    doc_number: String,
    doc_type: String,
  },
});

module.exports = mongoose.model('Buyer', buyerSchema);
