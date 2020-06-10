'use strict';
const getDateString = require('../components/DateString');
const Cron = require('../lib/Cron');
const Scheduler = require('../api/Scheduler');

console.log(getDateString(), '- Running procon-etl');

const cron = new Cron();
const scheduler = new Scheduler();

console.log(getDateString(), '- running cron job');
cron.run(scheduler.run);

process.on('SIGINT', async function () {
  try {
    console.log(getDateString(), '- Got SIGINT, stopping application');
  }
  catch (error) {
    console.error(getDateString(), error);
  }
  finally {
    process.exit();
  }
});