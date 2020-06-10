'use strict';
const getDateString = require('../components/DateString');
const AD = require('../lib/ActiveDirectory');
const Csv = require('../lib/Csv');
const ProconApi = require('../lib/ProconApi');

class Scheduler {
  async run() {
    console.log(getDateString(), '- Task start');
    const ad = new AD();
    const userList = await ad.getUsers();

    const csv = new Csv();
    await csv.populate(userList);

    //const procon = new ProconApi();
    //let res = await procon.upload();
    //console.log(getDateString(), '- Sent request, got response:', res);
  }
}

module.exports = Scheduler;