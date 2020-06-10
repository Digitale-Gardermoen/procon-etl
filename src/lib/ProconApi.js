'use strict';
const Request = require('../api/Request');
const RequestForm = require('./models/RequestForm');
const config = require('./config/Configuration');

class ProconApi {
  async upload() {
    const form = new RequestForm().build()

    this.options = {};
    this.options.body = form;
    this.options.method = 'POST';
    
    let request = new Request(config.proconRoute, this.options);
    const result = await request.send(form);
  }
}

module.exports = ProconApi;