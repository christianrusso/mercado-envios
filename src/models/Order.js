const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: Number,
  total: Number,
  total_amount: Number,
  paid_amount: Number,
  comment: String,
  currency_id: String,
  status: String,
  expiration_date: Date,
  date_last_updated: String,
  last_updated: Date,
  pack_id: String,
  date_created: Date,
  pickup_id: String,
  status_detail: String,
  date_closed: Date,
  manufacturing_ending_date: String,
  shipping: {
    type: Schema.Types.ObjectId,
    ref: 'Shipping',
  },

  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
  },
  payments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Payment',
    },
  ],
  order_items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'OrderItem',
    },
  ],
  coupon: {
    amount: Number,
    id: String,
  },
  mediations: [
    {
      date_created: String,
      id: Number,
      status: String,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
