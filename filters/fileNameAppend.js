
/**
 * Appends a string to a file name (before the file extension).
 * Useful for automating references to image of different sizes
 * from a common root filename
 *
 * @param {String} filename
 * @param {String} text
 */

module.exports = function(filename, append) {
  var name = new String(filename);
  var parts = name.split('.');
  return parts[0] + append + '.' + parts[1];
}

