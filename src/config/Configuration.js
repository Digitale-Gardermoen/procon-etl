'use strict';
require('dotenv').config();

class Configuration {
  constructor() {
    this.config = {};

    this.config.mongooseUri = process.env.MONGOOSE_MONGOURI || 'mongodb://localhost:27017';
    this.config.mongooseDbname = process.env.MONGOOSE_DBNAME || 'Default';
    this.config.mongooseUsername = process.env.MONGOOSE_USERNAME || 'user';
    this.config.mongoosePassword = process.env.MONGOOSE_PASSWORD || 'pass';

    this.config.companyId = process.env.COMAPNYID;
    this.config.languageId = process.env.LANGUAGEID;
    this.config.siteId = process.env.LANGUAGEID;
    this.config.csvFilePath = process.env.CSVFILEPATH;
    this.config.csvHeaders = process.env.CSVHEADERS;

    this.config.apiUrl = process.env.APIURL || 'https://localhost/';
    this.config.apiPort = process.env.APIPORT || '443';
    this.config.proconRoute = process.env.PROCONROUTE;

    this.config.schedule = process.env.CRONSCHEDULE;

    this.config.ldapUrl = process.env.LDAP_URL,
    this.config.ldapBaseDN = process.env.LDAP_BASEDN,
    this.config.ldapUsername = process.env.LDAP_USERNAME,
    this.config.ldapPassword = process.env.LDAP_PASSWORD,
    this.config.ldapQueryBaseDN = process.env.LDAP_QUERY_OPTS_BASEDN;
    this.config.adUserProperties = process.env.ADUSERPROPERTIES;
  }
}
module.exports = new Configuration().config;