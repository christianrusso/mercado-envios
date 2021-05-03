const Provider = require('../models/Provider');

exports.getAllProviders = async () => {
  try {
    const response = await Provider.find();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createProvider = async (data) => {
  try {
    const response = await Provider.create(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteProvider = async (id) => {
  try {
    const response = await Provider.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
