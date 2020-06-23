'use strict';
require('dotenv').config();

class Configuration {
  constructor() {
    this.config = {};

    this.config.companyId = process.env.COMPANYID;
    this.config.languageId = process.env.LANGUAGEID;
    this.config.siteId = process.env.SITEID;
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
    this.config.ldapQueryFilter = process.env.LDAP_QUERY_FILTER;
    this.config.adUserProperties = process.env.ADUSERPROPERTIES;
  }
}

module.exports = new Configuration().config;