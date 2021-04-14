const mercadopagoClient = require('../config/axios');

exports.MPgetOrdersBySeller = async (sellerId) => {
  try {
    const url = `/orders/search?seller=${sellerId}`;
    const response = await mercadopagoClient.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.MPgetOneOrderBySeller = async (sellerId, orderId) => {
  try {
    const url = `/orders/search?seller=${sellerId}&q=${orderId}`;
    const response = await mercadopagoClient.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.MPgetShippingDetail = async (shipmentId) => {
  try {
    const url = `/shipments/${shipmentId}`;
    const response = await mercadopagoClient.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.MPgetShippingDetailByOrder = async (orderId) => {
  try {
    const url = `/orders/${orderId}/shipments`;
    const response = await mercadopagoClient.get(url);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
