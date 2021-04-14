const ShippingService = require('../services/shippingService');

exports.getShippings = async (req, res) => {
  try {
    const response = await ShippingService.getAllShippings();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOneShipping = async (req, res) => {
  try {
    const shippingId = req.params.id;
    const response = await ShippingService.getOneShipping(shippingId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOneShippingByMLId= async (req, res) => {
  try {
    const mlId = req.params.mlid;
    const response = await ShippingService.getOneShippingByMLId(mlId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getShippingsBySeller= async (req, res) => {
  try {
    const seller = req.params.seller;
    const response = await ShippingService.getShippingsBySeller(seller);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};