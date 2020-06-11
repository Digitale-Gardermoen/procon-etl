'use strict';
const config = require('../config/Configuration');
const File = require('../storage/File');
const FormData = require('form-data');

/**
 * Class for Request forms, using the form-data package.
 */
class RequestForm {
  /**
   * Build the requestform.
   * @returns {Object} objects respresents multipart/form-data.
   */
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