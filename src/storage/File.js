'use strict';
const {
  createReadStream,
  createWriteStream
} = require('fs');

class File {
  constructor(path) {
    this.path = path;
  }

  readBinaryStream() {
    return createReadStream(this.path);
  }

  writeStream() {
    return createWriteStream(this.path);
  }
}

module.exports = File;