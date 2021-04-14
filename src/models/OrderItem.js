const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  item: {
    seller_custom_field: String,
    condition: String,
    global_price: String,
    category_id: String,
    variation_id: String,
    variation_attributes: [
      {
        name: String,
        id: String,
        value_id: String,
        value_name: String,
      },
    ],
    seller_sku: String,
    warranty: String,
    id: String,
    title: String,
  },
  quantity: Number,
  sale_fee: Number,
  listing_type_id: String,
  unit_price: Number,
  full_unit_price: Number,
  currency_id: String,
  manufacturing_days: String,
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
