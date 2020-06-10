'use strict';
const RequestFactory = require('../api/RequestFactory');

/**
 * Request module for getting and posting.
 * @class
 */
class Request {
  /**
   * Create a new instance of Request.
   * @param {String} route - The desired API route.
   * @param {Object} options - An object containing the nessecary keys and values for the request.
   * @param {String} [options.method] - The request method.
   * @param {Object} [options.body] - The request body, if omited the request will not POST.
   * @constructor
   * @example
   * const Request = require('../api/request');
   * let req = new Request(this.route, { parameters: 'happy', method: 'AUTHGET' });
   */
  //eslint-disable-next-line no-undefined
  constructor(route, options) {
    if (options.body) {
      this.method = options.method;
      this.body = options.body;
      this.factory = new RequestFactory(route, options.method);
      this.builtRequest = this.factory.post();
    } else {
      this.method = options.method;
      this.factory = new RequestFactory(route, options.method);
      this.builtRequest = this.factory.get();
    }
  }

  /**
   * Send the request to the API.
   * @returns {Promise<Object>} Promise represents received API data.
   * @example
   * (async function() {
   *   let res = await req.send();
   * })();
   */
  send(formData) {
    return new Promise((resolve, reject) => {
      const lib = this.options.urlObj.protocol == 'https:'
        ? require('https')
        : require('http');
      
      this.options.headers = formData.getHeaders();

      const request = lib.request(this.options.urlObj, this.options.requestOpt, (response) => {

        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error('Failed to load page, status code: ' + response.statusCode));
        }

        const returnBody = [];

        response.on('data', (chunk) => returnBody.push(chunk));
        response.on('end', () => resolve(JSON.parse(returnBody.join(''))));
      });

      request.on('error', (err) => reject(new Error(err)));

      formData.pipe(request);

      request.end();
    });
  }
}

module.exports = Request;