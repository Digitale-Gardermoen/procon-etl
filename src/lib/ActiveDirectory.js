const ActiveDirectory = require('activedirectory2').promiseWrapper;
const config = require('../config/Configuration');

const ldapConfig = {
  url: config.ldapUrl,
  baseDN: config.ldapBaseDN,
  username: config.ldapUsername,
  password: config.ldapPassword,
  attributes: {
    user: config.adUserProperties.split(',')
  }
};

let qryOpts = {
  filter: config.ldapQueryFilter,
  baseDN: config.ldapQueryBaseDN
};

/**
 * Connect to AD via LDAP, Get filtered users.
 * @class
 */
class LdapLoader {
  /**
   * Connects to LDAP with the specified config.
   * @constructor
   */
  constructor() {
    this.ad = new ActiveDirectory(ldapConfig);  // connect to AD with the current config.
  }

  /**
   * Get a filtered list of users from AD, query uses LDAP filtering.
   * @returns {Array<Object>} Array represents a list of user objects
   */
  getUsers() {
    let result = this.ad.findUsers(qryOpts, false);
    if (!result || result.length == 0) throw new Error('No users found.');
    return result;
  }
}

module.exports = LdapLoader;