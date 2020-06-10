'use strict';
const { createReadStream, createWriteStream } = require('fs');

class File {
  readBinaryStream(path) {
    return createReadStream(path);
  }

  writeStream(path) {
    return createWriteStream(path);
  }
}

module.exports = File;