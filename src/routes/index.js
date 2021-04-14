const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const shippingController = require('../controllers/shippingController');
const syncController = require('../controllers/syncController');
const sellerController = require('../controllers/sellerController');
const buyerController = require('../controllers/buyerController');
const paymentController = require('../controllers/paymentController');

module.exports = () => {
  router.get('/orders/', orderController.getOrders);
  router.get('/orders/:id', orderController.getOneOrder);
  router.get('/orders/seller/:id', orderController.getOrdersBySeller);

  router.get('/shipping/', shippingController.getShippings);
  router.get('/shipping/mercadolibre/:mlid', shippingController.getOneShippingByMLId);
  router.get('/shipping/seller/:seller', shippingController.getShippingsBySeller);
  router.get('/shipping/:id', shippingController.getOneShipping);

  router.get('/sellers/', sellerController.getSellers);
  router.get('/sellers/:seller', sellerController.getOneSeller);

  router.get('/payments/', paymentController.getPayments);
  router.get('/payments/:payment', paymentController.getOnePayment);

  router.get('/buyers/', buyerController.getBuyers);
  router.get('/buyers/:buyer', buyerController.getOneBuyer);

  router.get('/sync/order/seller/:seller', syncController.getOrders);

  return router;
};
