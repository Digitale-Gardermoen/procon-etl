'use strict';
const Request = require('../api/Request');
const RequestForm = require('../models/RequestForm');
const config = require('../config/Configuration');

class ProconApi {
  upload() {
    const form = new RequestForm().build()

    this.options = {};
    this.options.body = form;
    this.options.method = 'POST';
    
    let request = new Request(config.proconRoute, this.options);
    const result = request.send(form);
    return result;
  }
}

module.exports = ProconApi;