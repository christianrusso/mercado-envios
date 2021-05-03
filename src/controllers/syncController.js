const SyncService = require('../services/syncService');

exports.getOrders = async (req, res) => {
  try {
    const response = await SyncService.syncOrders();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
