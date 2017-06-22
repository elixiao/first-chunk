# first-chunk

> get the first chunk of readable stream

## Install

```bash
npm install first-chunk --save
yarn add first-chunk
```

## Usage

```javascript
const firstChunk = require('first-chunk')

const options = {
    encoding: 'utf8',
    size: 12  // defaults to 16384 (16kb)
}

firstChunk('path/to/file', options)
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.log(e)
    })
```

## License

MIT