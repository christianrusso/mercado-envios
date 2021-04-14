const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingOptionSchema = new Schema({
  id: Number,
  shipping_method_id: Number,
  name: String,
  currency_id: String,
  list_cost: Number,
  cost: Number,
  delivery_type: String,
  estimated_schedule_limit: {
    date: Date,
  },
  buffering: {
    date: Date,
  },
  estimated_delivery_time: {
    date: Date,
    unit: String,
    offset: {
      date: Date,
      shipping: Number,
    },
    time_frame: {
      from: String,
      to: String,
    },
    pay_before: Date,
    shipping: Number,
    handling: Number,
    schedule: String,
  },
  estimated_delivery_limit: {
    date: Date,
    offset: Number,
  },
  estimated_delivery_final: {
    date: Date,
    offset: Number,
  },
  estimated_delivery_extended: {
    date: Date,
    offset: Number,
  },
  estimated_handling_limit: {
    date: Date,
    offset: Number,
  },
});

module.exports = mongoose.model('ShippingOption', shippingOptionSchema);
