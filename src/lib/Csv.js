'use strict';
const config = require('../config/Configuration');
const File = require('../storage/File');

/**
 * Handles the creation of a CSV file.
 */
class Csv {
  /**
   * Creates the file and writeable stream.
   * @constructor
   * @param {string} [filePath] - Optional filepath, currently not in use.
   */
  constructor(filePath) {
    this.filePath = !filePath ? config.csvFilePath : filePath;
    this.fileStream = new File(this.filePath).writeStream();
  }

  /**
   * Populate the CSV file with the received user data.
   * @param {Array<Object>} users - A list of user objects
   * @returns {Promise<Object>} Promise represents an empty object(resolve) or an error(reject).
   */
  populate(users) {
    return new Promise((res, rej) => {
      this.fileStream.on('finish', () => res()); // this is called when the stream ends.
      this.fileStream.on('error', () => rej(new Error('There was an error writing to the stream.')));
      if (!this.fileStream.writable) rej(new Error('File stream unwriteable, stopping.'));
      
      // Set headers, all headers must be correct and provided in the csv file.
      this.fileStream.write(config.csvHeaders + '\r\n');
  
      // Configure the user object, as we need to set the countrycode
      // and remove the country code from the mobile number.
      users.forEach((user) => {
        if (!user.mail) return;

        let countryCode = '47';
        let mobile = user.mobile;
        if (!mobile) mobile = '';
        else if (mobile.startsWith('+')) {
          countryCode = mobile.substring(1, 3);
          mobile = mobile.substring(3);
        }

        let department = user.department;
        if (department.includes(',')) department.replace(',', '');
        
        // Hardcoded write, could not be bothered to create a dynamic result set.
        // WARN: might have to cork the stream if this will start having performance issues.
        // This is not tested with thousands of users.
        this.fileStream.write(`${user.givenName},${user.sn},${countryCode},${mobile},${user.mail},,${department},\r\n`);
      });

      this.fileStream.end();
    });
  }
}

module.exports = Csv;