const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  id: Number,
  reason: String,
  status_code: String,
  total_paid_amount: Number,
  operation_type: String,
  transaction_amount: Number,
  date_approved: Date,
  collector: {
    id: Number,
  },
  coupon_id: String,
  installments: Number,
  authorization_code: String,
  taxes_amount: 0,
  date_last_modified: Date,
  coupon_amount: Number,
  shipping_cost: Number,
  installment_amount: Number,
  date_created: Date,
  activation_uri: String,
  overpaid_amount: Number,
  card_id: Number,
  status_detail: String,
  issuer_id: String,
  payment_method_id: String,
  payment_type: String,
  deferred_period: String,
  atm_transfer_reference: {
    transaction_id: String,
    company_id: String,
  },
  site_id: String,
  payer_id: Number,
  order_id: Number,
  currency_id: String,
  status: String,
  transaction_order_id: String,
});

module.exports = mongoose.model('Payment', paymentSchema);
