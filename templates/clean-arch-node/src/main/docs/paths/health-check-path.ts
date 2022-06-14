export const healthCheckPath = {
  get: {
    tags: ['Health'],
    summary: 'API to check if the server is up',
    description: 'This route can be execute by any user',
    responses: {
      200: {
        description: 'Server is up'
      }
    }
  }
}
