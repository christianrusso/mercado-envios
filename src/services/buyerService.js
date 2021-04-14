const Buyer = require('../models/Buyer');

exports.getAllBuyers = async () => {
  try {
    const response = await Buyer.find();
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOneBuyer = async (buyerId) => {
  try {
    const response = await Buyer.findById(buyerId);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
