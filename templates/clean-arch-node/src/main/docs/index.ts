import path from './path'

export default {
  openapi: '3.0.0',
  info: {
    title: 'node-app',
    version: '1.0.0'
  },
  servers: [{
    url: '/api/',
    description: 'Main server'
  }],
  tags: [{
    name: 'Health',
    description: 'API to check if the server is up'
  }],
  paths: path
}
