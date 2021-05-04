const cron = require('node-cron');
const SyncService = require('../services/syncService');
const periodicity = require('../config/task');

exports.executeTask = () => { 
  cron.schedule(periodicity.getPeriodicity(), async () => {
    console.log('Start executing task at: ', new Date().toDateString());
    try {
      await SyncService.syncOrders();
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  });
};
