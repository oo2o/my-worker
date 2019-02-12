module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
  }