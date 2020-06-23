'use strict';
const cron = require('node-cron');
const config = require('../config/Configuration');
const getDateString = require('../components/DateString');

/**
 * Helper for the node-cron package.
 * @class
 */
class Cron {
  /**
   * Build the schedule.
   * @constructor
   * @param {string} schedule - A cron schedule eg. * * * * *
   */
  constructor(schedule) {
    if (!schedule) this.schedule = config.schedule;
    else this.schedule = schedule;
  }

  /**
   * Runs the cron schedule, will call the provided function.
   * @param {Function} func - A function the cron service should run.
   */
  run(func) {
    console.log(getDateString(), '- Got Schedule:', this.schedule);
    cron.schedule(this.schedule, () => {
      func();
    });
  }
}

module.exports = Cron;