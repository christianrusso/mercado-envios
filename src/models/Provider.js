const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: Number,
  name: String,
  sellerId: String,
  token: String,
});

module.exports = mongoose.model('Provider', providerSchema);
