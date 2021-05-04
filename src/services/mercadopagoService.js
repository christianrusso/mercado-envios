const axios = require('axios');
const mercadopagoConfig = require('../config/mercadopago')

exports.MPgetOrdersBySeller = async (provider) => {
  try {
    const url = `${mercadopagoConfig.api}/orders/search?seller=${provider.sellerId}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${provider.token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.MPgetOneOrderBySeller = async (sellerId, orderId) => {
  try {
    const url = `${mercadopagoConfig.api}/orders/search?seller=${sellerId}&q=${orderId}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${provider.token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.MPgetShippingDetail = async (shipmentId, provider) => {
  try {
    const url = `${mercadopagoConfig.api}/shipments/${shipmentId}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${provider.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.MPgetShippingDetailByOrder = async (orderId) => {
  try {
    const url = `/orders/${orderId}/shipments`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${provider.token}`,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.MPgetMe = async (provider) => {
  try {
    const url = `${mercadopagoConfig.api}/users/me`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${provider.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
