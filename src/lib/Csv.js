'use strict';
const config = require('../config/Configuration');
const File = require('../storage/File');

class Csv {
  constructor(filePath) {
    this.filePath = !filePath ? config.csvFilePath : filePath;
    this.fileStream = new File(this.filePath).writeStream();
  }

  populate(users) {
    return new Promise((res, rej) => {
      this.fileStream.on('finish', () => {
        res();
      });

      if (!this.fileStream.writable) rej('File stream unwriteable, stopping.');
      
      // Set headers
      this.fileStream.write(config.csvHeaders + '\n');
  
      users.forEach((user) => {
        let countryCode = '47';
        let mobile = user.mobile;
        if (user.mobile.startsWith('+')) {
          countryCode = mobile.subString(1, 2);
          mobile = mobile.subString(3);
        }
  
        this.fileStream.write(`${user.givenName},${user.sn},${countryCode},${mobile},${user.mail},,,\n`);
      });
  
      this.fileStream.end();
    });
  }
}

module.exports = Csv;