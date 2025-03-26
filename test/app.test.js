const request = require('supertest')
const app = require('../index')

describe('GET /', () => {
    it('should return a JSON message', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message', 'Hello, CI/CD World!')
    })
})
