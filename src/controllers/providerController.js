const ProviderService = require('../services/providerService');

exports.getProviders = async (req, res) => {
  try {
    const response = await ProviderService.getAllProviders();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.createProvider = async (req, res) => {
  try {
    const data = req.body;
    const response = await ProviderService.createProvider(data);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    const id = req.params.provider;
    const response = await ProviderService.deleteProvider(id);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
