const request = require('supertest');
const app = require('../server');

describe('GET /api/items', () => {
  it('responds with json containing a list of items', async () => {
    const response = await request(app).get('/api/items');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe('POST /api/items', () => {
  it('responds with 201 and the new item', async () => {
    const newItem = { name: 'Test Item' };
    const response = await request(app)
      .post('/api/items')
      .send(newItem);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(newItem.name);
  });
});
