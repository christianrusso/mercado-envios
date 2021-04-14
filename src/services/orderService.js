const Order = require('../models/Order');

exports.getAllOrders = async () => {
  try {
    const response = await Order.find()
      .populate('shipping')
      .populate('seller')
      .populate('buyer')
      .populate('payments')
      .populate('order_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneOrder = async (orderId) => {
  try {
    const response = await Order.findById(orderId)
      .populate('shipping')
      .populate('seller')
      .populate('buyer')
      .populate('payments')
      .populate('order_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOrdersBySeller = async (sellerId) => {
  try {
    const response = await Order.find({ seller: sellerId })
      .populate('shipping')
      .populate('seller')
      .populate('buyer')
      .populate('payments')
      .populate('order_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneOrderByMLId = async (orderId) => {
  try {
    const response = await Order.findOne({ id: orderId })
      .populate('shipping')
      .populate('seller')
      .populate('buyer')
      .populate('payments')
      .populate('order_items');
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
