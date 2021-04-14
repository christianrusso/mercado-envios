const databaseConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost/mercadopagoservice',
};

module.exports = databaseConfig;
