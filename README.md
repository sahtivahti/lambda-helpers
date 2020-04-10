# LAMBDA-HELPERS

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Helpers to work with AWS Lambda

## Installation

```
npm i @sahtivahti/lambda-helpers
```

## Usage

### CORS

```
const { cors } = require('@sahtivahti/lambda-helpers')

const hello = () => ({ statusCode: 200, body: 'Hello World!' })

module.exports.hello = cors(handler)
```
