'use strict';
const cron = require('node-cron');
const config = require('../config/Configuration');

class Cron {
  constructor(schedule) {
    if (!schedule) this.schedule = config.schedule;
    else this.schedule = schedule;
  }

  run(func) {
    cron.schedule(this.schedule, () => {
      func();
    });
  }
}

module.exports = Cron;