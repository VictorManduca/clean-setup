import { HealthCheckController } from '../src/presentation/controllers'

const makeSut = (): HealthCheckController => {
  return new HealthCheckController()
}

describe('Health Check Controller', () => {
  it('Should return 200 when aplication is up', async () => {
    const sut = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse.statusCode).toBe(200)
  })
})
