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

class LdapLoader {
  constructor() {
    this.ad = new ActiveDirectory(ldapConfig);  // connect to AD with the current config.
  }

  getUsers() {
    let result = this.ad.findUsers(qryOpts, false);
    if (!result || result.length == 0) throw new Error('No users found.');
    return result;
  }
}

module.exports = LdapLoader;