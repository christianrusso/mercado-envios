const axios = require('axios');
const mercadopagoConfig = require('./mercadopago');

const mercadopagoClient = axios.create({
  baseURL: mercadopagoConfig.api,
});

mercadopagoClient.defaults.headers.common['Authorization'] = `Bearer ${mercadopagoConfig.token}`;

module.exports = mercadopagoClient;
