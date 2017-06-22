const fs = require('fs');

module.exports = function (path, options) {
  if (options && options.size) options.highWaterMark = options.size
  return new Promise(function (resolve, reject) {
    fs.createReadStream(path, options)
      .on('data', function (chunk) {
        resolve(chunk)
        this.destroy()
      })
      .on('error', function (err) {
        reject(err);
      })
  })
}
