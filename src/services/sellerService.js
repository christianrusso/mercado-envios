const Seller = require('../models/Seller');

exports.getAllSellers = async () => {
  try {
    const response = await Seller.find();
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneSeller = async (sellerId) => {
  try {
    const response = await Seller.findById(sellerId);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
