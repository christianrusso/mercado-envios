const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiverAddressSchema = new Schema({
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
  agency: {
    carrier_id: Number,
    agency_id: String,
    description: String,
    phone: String,
    open_hours: String,
  },
  types: [String],
  latitude: Number,
  longitude: Number,
  geolocation_type: String,
  geolocation_last_updated: String,
  geolocation_source: String,
  delivery_preference: String,
  receiver_name: String,
  receiver_phone: String,
});

module.exports = mongoose.model('ReceiverAddress', receiverAddressSchema);
