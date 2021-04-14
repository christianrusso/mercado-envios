const SyncService = require('../services/syncService');

exports.getOrders = async (req, res) => {
  try {
    const seller = req.params.seller;
    const response = await SyncService.syncOrders(seller);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
