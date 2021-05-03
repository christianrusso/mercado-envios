const Order = require('../models/Order');
const Buyer = require('../models/Buyer');
const Seller = require('../models/Seller');
const Payment = require('../models/Payment');
const OrderItem = require('../models/OrderItem');
const Shipping = require('../models/Shipping');
const SenderAddress = require('../models/SenderAddress');
const ReceiverAddress = require('../models/ReceiverAddress');
const ShippingOption = require('../models/ShippingOption');
const ItemShipping = require('../models/ItemShipping');
const Provider = require('../models/Provider');

const MercadoPagoService = require('./mercadopagoService');

exports.syncOrders = async () => {
  try {
    const providers = await Provider.find();
    if (providers.length < 1) throw new Error('You dont have providers');
    for await (let provider of providers) {
      if (!provider.token) throw new Error('You must have a token');
      let orders;
      if (!provider.sellerId) {
        const me = await MercadoPagoService.MPgetMe(provider);
        const prov = await Provider.findOneAndUpdate(
          { _id: provider._id },
          { sellerId: me.id },
          { useFindAndModify: false }
        );
        orders = await MercadoPagoService.MPgetOrdersBySeller(prov);
      } else {
        orders = await MercadoPagoService.MPgetOrdersBySeller(provider);
      }
      for await (const order of orders) {
        const orderExist = await Order.findOne({ id: order.id });
        if (!orderExist) {
          await handleNewOrder(order, provider);
        } else if (orderExist.date_last_updated != order.date_last_updated) {
          await orderExist.delete();
          await handleNewOrder(order, provider);
        } else {
          continue;
        }
      }
    }

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const handleNewOrder = async (order, provider) => {
  try {
    console.log('NEW ORDER WITH ID: ', order.id);
    const { buyer, seller, payments, order_items, shipping } = order;
    let buyerData;
    let sellerData;
    const buyerExist = await Buyer.findOne({ id: buyer.id });
    if (!buyerExist) {
      buyerData = await Buyer.create(buyer);
    }
    const sellerExist = await Seller.findOne({ id: seller.id });
    if (!sellerExist) {
      sellerData = await Seller.create(seller);
    }

    let newPayments = [];
    for await (payment of payments) {
      const newPay = await Payment.create(payment);
      newPayments.push(newPay);
    }

    let newOrderItems = [];
    for await (orderItem of order_items) {
      const newOrderItem = await OrderItem.create(orderItem);
      newOrderItems.push(newOrderItem);
    }
    let newShippment;
    if (shipping.id) {
      const shippment = await MercadoPagoService.MPgetShippingDetail(shipping.id, provider);
      newShippment = await handleNewShippment(shippment);
    }
    order.buyer = buyerExist || buyerData;
    order.seller = sellerExist || sellerData;
    order.payments = newPayments;
    order.order_items = newOrderItems;
    order.shipping = newShippment || null;

    const newOrder = await Order.create(order);
    return newOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

const handleNewShippment = async (shippment) => {
  try {
    const { sender_address, receiver_address, shipping_option, shipping_items } = shippment;
    const newSenderAddress = await SenderAddress.create(sender_address);
    const newReceiverAddress = await ReceiverAddress.create(receiver_address);
    const newShippingOption = await ShippingOption.create(shipping_option);
    let newShippingsItems = [];
    for await (const item of shipping_items) {
      const newItem = await ItemShipping.create(item);
      newShippingsItems.push(newItem);
    }

    shippment.sender_address = newSenderAddress;
    shippment.receiver_address = newReceiverAddress;
    shippment.shipping_option = newShippingOption;
    shippment.shipping_items = newShippingsItems;
    const newShippment = await Shipping.create(shippment);
    return newShippment;
  } catch (error) {
    throw new Error(error.message);
  }
};
