'use strict';
const getDateString = require('../components/DateString');
const AD = require('../lib/ActiveDirectory');
const Csv = require('../lib/Csv');
const ProconApi = require('../lib/ProconApi');

/**
 * Class is built to run as a task, the task is to:
 * Get AD users, populate a csv file and send the csv file to an API.
 * @class Scheduler
 */
class Scheduler {
  /**
   * Run the task, this should be called by the cron job.
   */
  async run() {
    console.log(getDateString(), '- Task start');
    const ad = new AD();
    const userList = await ad.getUsers();

    const csv = new Csv();
    await csv.populate(userList);

    const procon = new ProconApi();
    try {
      let res = await procon.upload();
      console.log(getDateString(), '- Sent request, got response:', res);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      console.log(getDateString(), '-Task end');
    }
  }
}

module.exports = Scheduler;