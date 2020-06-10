'use strict';
const config = require('../config/Configuration');
const File = require('../storage/File');
const FormData = require('form-data');

class RequestForm {
  build() {
    var form = new FormData();
    form.append('CsvFile', new File(config.csvFilePath).readBinaryStream());
    form.append('CompanyId', config.companyId);
    form.append('LanguageId', config.languageId);
    form.append('SiteId', config.siteId);

    return form;
  }
}

module.exports = RequestForm;