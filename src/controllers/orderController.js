const OrderService = require('../services/orderService');

exports.getOrders = async (req, res) => {
  try {
    const response = await OrderService.getAllOrders();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOneOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const response = await OrderService.getOneOrder(orderId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOrdersBySeller = async (req, res) => {
  try {
    const sellerId = req.params.id;
    const response = await OrderService.getOrdersBySeller(sellerId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
