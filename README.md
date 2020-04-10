# LAMBDA-HELPERS

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
