const firstChunk = require('./index')

const options = {
    encoding: 'utf8',
    highWaterMark: 12  // defaults to 16384 (16kb)
}

firstChunk('./package.json', options)
    .then(d => {
        console.log(d)
        console.log(d.length)
    })
    .catch(e => {
        console.log(e)
    })