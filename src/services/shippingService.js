const Shipping = require('../models/Shipping');
const Order = require('../models/Order');

exports.getAllShippings = async () => {
  try {
    const response = await Shipping.find()
      .populate('sender_address')
      .populate('receiver_address')
      .populate('shipping_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneShipping = async (shippingId) => {
  try {
    const response = await Shipping.findById(shippingId)
      .populate('sender_address')
      .populate('receiver_address')
      .populate('shipping_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneShippingByMLId = async (shippingId) => {
  try {
    const response = await Shipping.findOne({ id: shippingId })
      .populate('sender_address')
      .populate('receiver_address')
      .populate('shipping_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getShippingsBySeller = async (sellerId) => {
  try {
    const orders = await Order.find({ seller: sellerId });
    let shippings = [];
    for await (let order of orders) {
      const shipping = await Shipping.find({ shipping: order.shipping })
        .populate('sender_address')
        .populate('receiver_address')
        .populate('shipping_items');
      shippings.push(...shipping);
    }
    return shippings;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
