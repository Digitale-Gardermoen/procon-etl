'use strict';
const {
  createReadStream,
  createWriteStream
} = require('fs');

/**
 * File handling, write and read streams
 */
class File {
  /**
   * Provides the methods with the file path.
   * @constructor
   * @param {string} path - File path.
   */
  constructor(path) {
    this.path = path;
  }

  /**
   * Open a file for a readable stream.
   * @returns {object} Objects represents a readable file stream.
   */
  readBinaryStream() {
    return createReadStream(this.path);
  }

  /**
   * Opens a write stream.
   * @returns {object} objects represents a writeable file stream.
   */
  writeStream() {
    return createWriteStream(this.path);
  }
}

module.exports = File;