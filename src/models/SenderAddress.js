const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const senderAddressSchema = new Schema({
  id: Number,
  address_line: String,
  street_name: String,
  comment: String,
  zip_code: String,
  city: {
    id: String,
    name: String,
  },
  state: {
    id: String,
    name: String,
  },
  country: {
    id: String,
    name: String,
  },
  neighborhood: {
    id: String,
    name: String,
  },
  municipality: {
    id: String,
    name: String,
  },
  agency: String,
  types: [String],
  latitude: Number,
  longitude: Number,
  geolocation_type: String,
  geolocation_last_updated: String,
  geolocation_source: String,
});

module.exports = mongoose.model('SenderAddress', senderAddressSchema);
