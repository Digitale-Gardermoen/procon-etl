'use strict';
const Request = require('../api/Request');
const RequestForm = require('../models/RequestForm');
const config = require('../config/Configuration');

/**
 * Helper for the procon API, class is designed to only work with this API.
 */
class ProconApi {
  /**
   * Build the POST request and send the request with the form attached.
   * @returns {string} String represents a JSON object with the HTTPS response.
   */
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