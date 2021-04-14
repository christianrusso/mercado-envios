const PaymentService = require('../services/paymentService');

exports.getPayments = async (req, res) => {
  try {
    const response = await PaymentService.getAllPayments();
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};

exports.getOnePayment = async (req, res) => {
  try {
    const paymentId = req.params.payment;
    const response = await PaymentService.getOnePayment(paymentId);
    return res.status(200).json({ ok: true, result: response });
  } catch (error) {
    return res.status(404).json({ ok: false, error: error.message });
  }
};
