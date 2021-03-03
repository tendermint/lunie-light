module.exports = {
  urlSafeEncode(value) {
    return value.replace('+', '_').replace('/', '-')
  },
}
