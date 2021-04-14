const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  id: Number,
  mode: String,
  created_by: String,
  order_id: Number,
  order_cost: Number,
  base_cost: Number,
  site_id: String,
  status: String,
  substatus: String,
  status_history: {
    date_cancelled: Date,
    date_delivered: Date,
    date_first_visit: Date,
    date_handling: Date,
    date_not_delivered: Date,
    date_ready_to_ship: Date,
    date_shipped: Date,
    date_returned: Date,
  },
  substatus_history: [
    {
      status: String,
      substatus: String,
      date: Date,
    },
  ],
  date_created: Date,
  last_updated: Date,
  tracking_number: String,
  service_id: Number,
  carrier_info: String,
  sender_id: Number,
  sender_address: {
    type: Schema.Types.ObjectId,
    ref: 'SenderAddress',
  },
  receiver_id: Number,
  receiver_address: {
    type: Schema.Types.ObjectId,
    ref: 'ReceiverAddress',
  },
  shipping_items: [{ type: Schema.Types.ObjectId, ref: 'ItemShipping' }],
  shipping_option: {
    type: Schema.Types.ObjectId,
    ref: 'ShippingOption',
  },
  comments: String,
  date_first_printed: Date,
  market_place: String,
  return_details: String,
  tags: [String],
  type: String,
  logistic_type: String,
  application_id: String,
  return_tracking_number: Number,
  cost_components: {
    special_discount: Number,
    loyal_discount: Number,
    compensation: Number,
    gap_discount: Number,
    ratio: Number,
  },
});

module.exports = mongoose.model('Shipping', shippingSchema);
