const mercadopagoConfig = {
    api: process.env.MP_URL || 'https://api.mercadolibre.com',
    token:process.env.MP_TOKEN || '123456'
  };
  
  module.exports = mercadopagoConfig;