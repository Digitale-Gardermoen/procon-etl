'use strict';
const config = require('../config/Configuration');
const File = require('../storage/File');

class Csv {
  constructor(filePath) {
    this.filePath = !filePath ? config.csvFilePath : filePath;
    this.fileStream = new File().writeStream(this.filePath);
  }

  populate(users) {
    if (!this.fileStream.writable) throw new Error('File stream unwriteable, stopping.');
    
    // Set headers
    this.fileStream.write(config.csvHeaders + '\n');

    users.forEach((user) => {
      this.fileStream.write(`${user.givenName}`);
    });
  }
}