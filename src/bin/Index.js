'use strict';
const getDateString = require('../components/DateString');
const AD = require('../lib/ActiveDirectory');
const Cron = require('../lib/Cron');

const cron = new Cron();
//cron.run(() => { console.log('it works.') });
const ad = new AD();
(async function() {
  console.log(await ad.getUsers());
});

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