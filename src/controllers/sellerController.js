const SellerService = require('../services/sellerService');

exports.getSellers = async (req, res) => {
  try {
    const response = await SellerService.getAllSellers();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOneSeller = async (req, res) => {
  try {
    const sellerId = req.params.seller;
    const response = await SellerService.getOneSeller(sellerId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
