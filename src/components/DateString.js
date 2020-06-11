'use strict';
/**
 * Create a new date and make it into a string.
 * @function
 * @returns {string} string represents a stringygied date.
 */
function getDateString() {
  const date = new Date();
  const dateString = new Date(date - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .replace("T", ' ')
    .split('.')
    .shift();
  return dateString;
}

module.exports = getDateString;