'use strict';
const config = require('../config/Configuration');

/**
 * Factory for a new request.
 * @class
 */
class RequestFactory {
  /**
   * Request constructor.
   * @constructor
   * @param {String} route - The route for the api request.
   * @param {String} [method='GET'] - Request method.
   * @example
   * const RequestFactory = require('./requestFactory');
   * const factory = new RequestFactory(route, parameters, method);
   */
  constructor(route, method = 'GET') {
    this.route = route;
    this.method = method;
  }

  /**
   * Build a new URL for the request.
   * @returns {Object} Object represents a new URL.
   * @example const options = factory.get();
   */
  get() {
    if (!config.apiUrl) {
      throw new Error('config.apiUrl is undefined, there is nowhere to send this request');
    }
    if (this.method != 'GET' && this.method != 'AUTHGET') {
      throw new Error('You cannot GET a non-get request, check method and try again');
    }

    const url = `${config.apiUrl}/${this.route}`
    const urlObj = new URL(url);

    let options = {};
    options.host = urlObj.host;
    options.method = 'GET';
    options.path = urlObj.pathname;
    options.port = config.apiPort;

    return {
      options,
      urlObj
    };
  }

  /**
   * Build a option object for a post request.
   * @returns {Object} Object represents options for use in a request.
   * @example const options = factory.post(this.body.length);
   */
  post() {
    if (!config.apiUrl)                throw new Error('config.apiUrl is undefined, there is nowhere to send this request');
    if (this.method != 'POST')         throw new Error('You cannot POST a non-post request, check method and try again');

    let query = '';
    this.parameters.forEach((key) => {
      query += '/' + key;
    });

    const url = `${config.apiUrl}/${this.route}${query}`
    const urlObj = new URL(url);

    let requestOpt = {};

    requestOpt.host = urlObj.host;
    requestOpt.method = 'POST';
    requestOpt.path = urlObj.pathname;
    requestOpt.port = config.apiPort;
    requestOpt.headers;

    return {
      requestOpt,
      urlObj
    };
  }
}

module.exports = RequestFactory;