module.exports = {
  proxyList: {
    '/api/getDiscList': {
      target: 'http://localhost:8080',
      changeOrigin: true
    }
  }
}
