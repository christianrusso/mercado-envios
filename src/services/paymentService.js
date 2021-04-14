const Payment = require('../models/Payment');

exports.getAllPayments = async () => {
  try {
    const response = await Payment.find();
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.getOnePayment= async (paymentId) => {
  try {
    const response = await Payment.findById(paymentId);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
