const BuyerService = require('../services/buyerService');

exports.getBuyers = async (req, res) => {
  try {
    const response = await BuyerService.getAllBuyers();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOneBuyer = async (req, res) => {
  try {
    const buyerId = req.params.buyer;
    const response = await BuyerService.getOneBuyer(buyerId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
