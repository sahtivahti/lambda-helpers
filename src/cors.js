module.exports = fn => {
  return async (...args) => {
    const result = await fn(...args)

    result.headers = {
      ...result.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }

    return result
  }
}
